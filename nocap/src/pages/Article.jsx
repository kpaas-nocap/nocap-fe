import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as A from "../styles/StyledArticle";
import Rate from "./Rate";
import axios from "axios";

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);

  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("new");
  const [bookmarked, setBookmarked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ 로그인 여부 상태 추가

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []); // ✅ 반드시 useEffect 내부에서 호출!

  const [analysisData, setAnalysisData] = useState(null); // ✅ 분석 데이터 상태 추가
  const [loading, setLoading] = useState(true);

  // 추가: 댓글을 로컬에서 관리할 상태
  const [comments, setComments] = useState([]);
  // 추가: 요청 중인 commentId들을 잠그기 위한 상태 (중복 클릭 방지)
  const [disabledVotes, setDisabledVotes] = useState({});

  const [maskedUsername, setMaskedUsername] = useState("사용자");

  const maskUsername = (username = "") => {
    if (username.length <= 1) return "*";
    const visibleLength = Math.ceil(username.length / 2); // 반띵
    const visible = username.slice(0, visibleLength);
    const masked = "*".repeat(username.length - visibleLength);
    return visible + masked;
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        const res = await axios.get("https://www.nocap.kr/api/nocap/user/me", {
          headers: {
            Authorization: token,
          },
        });

        const rawUsername = res.data.username || "사용자";
        setMaskedUsername(maskUsername(rawUsername));
      } catch (err) {
        console.error("❌ 사용자 정보 불러오기 실패:", err);
      }
    };

    fetchUserInfo();
  }, []);

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setText(value);
    }
  };

  useEffect(() => {
    if (analysisData?.mainNewsDto?.phrases) {
      console.log("🟡 phrases 목록:", analysisData.mainNewsDto.phrases);
    }
  }, [analysisData]);

  const highlightPhrases = (text, phrases) => {
    if (!phrases || phrases.length === 0) return text;

    const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length);

    let replacedText = text;
    sortedPhrases.forEach((phrase, index) => {
      const safePhrase = phrase.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`(${safePhrase})`, "g");
      replacedText = replacedText.replace(
        regex,
        `<<<HIGHLIGHT${index}>>>$1<<<END${index}>>>`
      );
    });

    const parts = replacedText.split(/(<<<HIGHLIGHT\d+>>>|<<<END\d+>>>)/g);
    const result = [];
    let isHighlighting = false;
    let key = 0;

    for (let part of parts) {
      if (part.startsWith("<<<HIGHLIGHT")) {
        isHighlighting = true;
        continue;
      }
      if (part.startsWith("<<<END")) {
        isHighlighting = false;
        continue;
      }

      result.push(
        <span
          key={key++}
          style={isHighlighting ? { backgroundColor: "#FDFF6980" } : undefined}
        >
          {part}
        </span>
      );
    }

    return result;
  };

  // ✅ 분석 데이터 가져오기
  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const { analysisId } = location.state || {};

        if (!analysisId) {
          console.error("❌ analysisId가 없습니다.");
          return;
        }

        const res = await axios.get(
          `https://www.nocap.kr/api/nocap/analysis/${analysisId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setAnalysisData(res.data);
        // 책갈피 정보 등도 기존처럼 처리
      } catch (err) {
        console.error("❌ 분석 결과 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysisData();
  }, [location.state]);

  // analysisData가 바뀌면 comments 상태를 초기화
  useEffect(() => {
    if (analysisData?.comments) {
      // comments 배열을 안전하게 복사해서 로컬 상태로 사용
      setComments(
        analysisData.comments.map((c) => ({
          ...c,
        }))
      );
    }
  }, [analysisData]);

  // 추천/비추천 요청 함수
  const handleVote = async (commentId, action) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login/local");
      return;
    }

    // 이미 요청 중이면 무시
    if (disabledVotes[commentId]) return;

    // UI 즉시 잠금(중복 클릭 방지)
    setDisabledVotes((prev) => ({ ...prev, [commentId]: true }));

    try {
      const payload = {
        commentId: commentId,
        action: action, // "RECOMMEND" or "NON_RECOMMEND"
      };

      const res = await axios.post(
        "https://www.nocap.kr/api/nocap/comment/recommend",
        payload,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // 성공 시, 로컬 comments 카운트 업데이트 (낙관적 업데이트)
      if (res.status === 200 || res.status === 201) {
        setComments((prev) =>
          prev.map((c) => {
            if (c.commentId !== commentId) return c;
            // 백엔드가 실제로 어떤 응답을 주는지에 따라 조정 가능.
            // 여기서는 버튼 클릭 시 단순히 +1 처리
            if (action === "RECOMMEND") {
              return { ...c, recommendation: (c.recommendation || 0) + 1 };
            } else {
              return {
                ...c,
                nonRecommendation: (c.nonRecommendation || 0) + 1,
              };
            }
          })
        );
      } else {
        // 실패 시 (status 200이 아니면) 안내
        console.error("추천 API 응답 오류:", res);
        alert("요청이 정상적으로 처리되지 않았습니다.");
      }
    } catch (err) {
      console.error("추천 요청 실패:", err);
      alert("추천 요청 중 오류가 발생했습니다.");
    } finally {
      // 잠금 해제
      setDisabledVotes((prev) => {
        const copy = { ...prev };
        delete copy[commentId];
        return copy;
      });
    }
  };

  const handleSubmitComment = async () => {
    if (!text.trim()) return; // 빈 문자열 방지
    const token = localStorage.getItem("accessToken");
    const analysisId = analysisData?.analysisId;
    if (!token || !analysisId) {
      console.error("❌ 토큰 또는 analysisId 없음");
      return;
    }
    try {
      const response = await axios.post(
        "https://www.nocap.kr/api/nocap/comment/create",
        { analysisId: analysisId, content: text.trim() },
        {
          headers: { Authorization: token, "Content-Type": "application/json" },
        }
      );
      console.log("✅ 댓글 등록 성공:", response.data);
      setText(""); // 입력창 초기화
      window.location.reload(); // 새로고침으로 댓글 목록 반영
    } catch (err) {
      console.error("❌ 댓글 등록 실패:", err);
    }
  };

  // 렌더링: loading / error 처리 유지
  if (loading) return <div>로딩 중...</div>;
  if (!analysisData) return <div>분석 결과를 불러올 수 없습니다.</div>;

  // ✅ 이 아래는 무조건 analysisData가 유효한 상태
  const {
    category,
    mainNewsTitle,
    date,
    image,
    mainNewsDto,
    newsComparisonDtos,
  } = analysisData;

  return (
    <A.Container>
      <A.MobileOnly>
        <A.Header>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
            onClick={goBack}
          />
          <img
            id="bookmark"
            src={`${process.env.PUBLIC_URL}/images/${
              bookmarked ? "bookmark_b.svg" : "bookmark.svg"
            }`}
            alt="bookmark"
            onClick={toggleBookmark}
            style={{ cursor: "pointer" }}
          />
        </A.Header>
        <A.Hr />
      </A.MobileOnly>

      <A.DesktopOnly>
        <A.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <A.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기" onClick={goNews}>
              뉴스
              <div id="circle" />
            </div>
            <div id="tag" onClick={goMy} title="마이 페이지로 이동">
              마이페이지
            </div>
          </A.Menu>
        </A.Head>
      </A.DesktopOnly>

      <A.MobileOnly>
        <A.Body>
          <A.Up>
            <A.Category>{category}</A.Category>
            <A.Title>{mainNewsTitle}</A.Title>
            <A.Date>{new Date(date).toLocaleDateString("ko-KR")}</A.Date>
          </A.Up>

          <A.Img>
            <img src={image || "/images/news.jpg"} alt="news" />
          </A.Img>

          <A.ContentWrapper>
            <A.Content expanded={expanded}>
              {highlightPhrases(
                mainNewsDto?.content || "",
                mainNewsDto?.phrases || []
              )}
            </A.Content>
            <A.GradientOverlay expanded={expanded} />
          </A.ContentWrapper>

          {!expanded && (
            <A.Button onClick={() => setExpanded(true)}>기사 본문보기</A.Button>
          )}
        </A.Body>

        <A.Related>
          <A.RTitle>관련기사</A.RTitle>
          <A.List>
            {newsComparisonDtos?.map((item, idx) => (
              <A.Mass key={idx}>
                <A.Component>
                  <A.Text>
                    <A.ATitle>
                      {item.newsWithSimilarityDto.newsDto.title}
                    </A.ATitle>
                    <A.ADate>{item.newsWithSimilarityDto.newsDto.date}</A.ADate>
                  </A.Text>
                  <A.Rate>
                    <Rate
                      percent={Math.round(
                        (item.newsWithSimilarityDto.similarity || 0) * 100
                      )}
                    />
                  </A.Rate>
                </A.Component>

                {/* ✅ 버튼 클릭 시 해당 인덱스만 열리게 설정 (닫힘 없음) */}
                {openIndex !== idx && (
                  <A.Go onClick={() => setOpenIndex(idx)}>
                    펼쳐서 비교요약 보기
                  </A.Go>
                )}

                {/* ✅ 선택된 인덱스만 드롭다운 보여줌 */}
                <A.Dropdown expanded={openIndex === idx}>
                  <A.DropTitle>메인 기사와 비교 요약</A.DropTitle>
                  <ul>
                    <li>{item.comparison || "비교 요약 정보 없음"}</li>
                  </ul>
                </A.Dropdown>
              </A.Mass>
            ))}
          </A.List>
          <A.Hr />

          <A.Comment>
            <A.Detail>
              <div id="num">{comments?.length || 0}</div>
              <div id="detail">개의 댓글</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/refresh.svg`}
                alt="refresh"
                onClick={() => window.location.reload()}
              />
            </A.Detail>
          </A.Comment>

          {isLoggedIn ? (
            <A.Input>
              <A.Profile>
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile.png`}
                  alt="profile"
                />
                <div>{maskedUsername}</div>
              </A.Profile>
              <A.TextArea>
                <textarea
                  value={text}
                  onChange={handleChange}
                  placeholder="다양한 의견이 서로 존중될 수 있도록 다른 사람에게 불쾌감을 주는 욕설, 혐오, 비하의 표현이나 타인의 권리를 침해하는 내용은 주의해 주세요. 모든 작성자는 본인이 작성한 의견에 대해 법적 책임을 갖는다는 점 유의하시기 바랍니다."
                ></textarea>
              </A.TextArea>
              <A.IHr />
              <A.Down>
                <A.Char>
                  <div id="now">{text.length} </div>
                  <div id="max"> / 200</div>
                </A.Char>
                <A.Btn active={text.length > 0} onClick={handleSubmitComment}>
                  등록
                </A.Btn>
              </A.Down>
            </A.Input>
          ) : (
            <A.LoginPrompt onClick={() => navigate("/login/local")}>
              댓글을 작성하려면 로그인 해주세요.
            </A.LoginPrompt>
          )}

          <A.Sort>
            <div
              id="new"
              style={{
                fontWeight: selected === "new" ? 600 : 400,
                cursor: "pointer",
              }}
              onClick={() => setSelected("new")}
            >
              최신순
            </div>

            <div
              id="up"
              style={{
                fontWeight: selected === "up" ? 600 : 400,
                cursor: "pointer",
              }}
              onClick={() => setSelected("up")}
            >
              공감순
            </div>
          </A.Sort>

          <A.Hr />

          <A.RList>
            {comments?.length > 0 ? (
              comments.map((c) => (
                <A.Comp key={c.commentId}>
                  <A.Small>
                    <div id="username">{maskUsername(c.username)}</div>
                    <div id="date">
                      {new Date(c.date).toLocaleString("ko-KR")}
                    </div>
                  </A.Small>

                  <A.CDet>{c.content}</A.CDet>

                  <A.Icon>
                    <A.Thumb>
                      <A.TUp
                        onClick={() => handleVote(c.commentId, "RECOMMEND")}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/good.svg`}
                          alt="good"
                        />
                        <div>{c.recommendation}</div>
                      </A.TUp>
                      <A.TUp
                        onClick={() => handleVote(c.commentId, "NON_RECOMMEND")}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/bad.svg`}
                          alt="bad"
                        />
                        <div>{c.nonRecommendation}</div>
                      </A.TUp>
                    </A.Thumb>
                  </A.Icon>

                  <A.AHr />
                </A.Comp>
              ))
            ) : (
              <div style={{ marginTop: "40px" }}>댓글이 없습니다.</div>
            )}
          </A.RList>
        </A.Related>
      </A.MobileOnly>

      <A.DesktopOnly>
        <A.Layout>
          <A.LeftPannel>
            <A.Body>
              <A.Up>
                <A.Category>{category}</A.Category>
                <A.Title>{mainNewsTitle}</A.Title>
                <A.Date>{new Date(date).toLocaleDateString("ko-KR")}</A.Date>
              </A.Up>

              <A.Img>
                <img src={image || "/images/news.jpg"} alt="news" />
              </A.Img>

              <A.ContentWrapper>
                <A.Content expanded={expanded}>
                  {highlightPhrases(
                    mainNewsDto?.content || "",
                    mainNewsDto?.phrases || []
                  )}
                </A.Content>
                <A.GradientOverlay expanded={expanded} />
              </A.ContentWrapper>

              {!expanded && (
                <A.Button onClick={() => setExpanded(true)}>
                  기사 본문보기
                </A.Button>
              )}
            </A.Body>

            <A.Related>
              <A.Comment>
                <A.Detail>
                  <div id="num">{comments?.length || 0}</div>
                  <div id="detail">개의 댓글</div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/refresh.svg`}
                    alt="refresh"
                    onClick={() => window.location.reload()}
                  />
                </A.Detail>
              </A.Comment>

              {isLoggedIn ? (
                <A.Input>
                  <A.Profile>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/profile.png`}
                      alt="profile"
                    />
                    <div>{maskedUsername}</div>
                  </A.Profile>
                  <A.TextArea>
                    <textarea
                      value={text}
                      onChange={handleChange}
                      placeholder="다양한 의견이 서로 존중될 수 있도록 다른 사람에게 불쾌감을 주는 욕설, 혐오, 비하의 표현이나 타인의 권리를 침해하는 내용은 주의해 주세요. 모든 작성자는 본인이 작성한 의견에 대해 법적 책임을 갖는다는 점 유의하시기 바랍니다."
                    ></textarea>
                  </A.TextArea>
                  <A.IHr />
                  <A.Down>
                    <A.Char>
                      <div id="now">{text.length} </div>
                      <div id="max"> / 200</div>
                    </A.Char>
                    <A.Btn
                      active={text.length > 0}
                      onClick={handleSubmitComment}
                    >
                      등록
                    </A.Btn>
                  </A.Down>
                </A.Input>
              ) : (
                <A.LoginPrompt onClick={() => navigate("/login/local")}>
                  댓글을 작성하려면 로그인 해주세요.
                </A.LoginPrompt>
              )}

              <A.Sort>
                <div
                  id="new"
                  style={{
                    fontWeight: selected === "new" ? 600 : 400,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected("new")}
                >
                  최신순
                </div>

                <div
                  id="up"
                  style={{
                    fontWeight: selected === "up" ? 600 : 400,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected("up")}
                >
                  공감순
                </div>
              </A.Sort>

              <A.AHr />

              <A.RList>
                {comments?.length > 0 ? (
                  comments.map((c) => (
                    <A.Comp key={c.commentId}>
                      <A.Small>
                        <div id="username">{maskUsername(c.username)}</div>
                        <div id="date">
                          {new Date(c.date).toLocaleString("ko-KR")}
                        </div>
                      </A.Small>

                      <A.CDet>{c.content}</A.CDet>

                      <A.Icon>
                        <A.Thumb>
                          <A.TUp
                            onClick={() => handleVote(c.commentId, "RECOMMEND")}
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/images/good.svg`}
                              alt="good"
                            />
                            <div>{c.recommendation}</div>
                          </A.TUp>
                          <A.TUp
                            onClick={() =>
                              handleVote(c.commentId, "NON_RECOMMEND")
                            }
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/images/bad.svg`}
                              alt="bad"
                            />
                            <div>{c.nonRecommendation}</div>
                          </A.TUp>
                        </A.Thumb>
                      </A.Icon>

                      <A.AHr />
                    </A.Comp>
                  ))
                ) : (
                  <div style={{ marginTop: "40px" }}>댓글이 없습니다.</div>
                )}
              </A.RList>
            </A.Related>
          </A.LeftPannel>

          <A.RightPannel>
            <A.RTitle>관련기사</A.RTitle>
            <A.List>
              {newsComparisonDtos?.map((item, idx) => (
                <A.Mass key={idx}>
                  <A.Component>
                    <A.Text>
                      <A.ATitle>
                        {item.newsWithSimilarityDto.newsDto.title}
                      </A.ATitle>
                      <A.ADate>
                        {item.newsWithSimilarityDto.newsDto.date}
                      </A.ADate>
                    </A.Text>
                    <A.Rate>
                      <Rate
                        percent={Math.round(
                          (item.newsWithSimilarityDto.similarity || 0) * 100
                        )}
                      />
                    </A.Rate>
                  </A.Component>

                  {/* ✅ 버튼 클릭 시 해당 인덱스만 열리게 설정 (닫힘 없음) */}
                  {openIndex !== idx && (
                    <A.Go onClick={() => setOpenIndex(idx)}>
                      펼쳐서 비교요약 보기
                    </A.Go>
                  )}

                  {/* ✅ 선택된 인덱스만 드롭다운 보여줌 */}
                  <A.Dropdown expanded={openIndex === idx}>
                    <A.DropTitle>메인 기사와 비교 요약</A.DropTitle>
                    <ul>
                      <li>{item.comparison || "비교 요약 정보 없음"}</li>
                    </ul>
                  </A.Dropdown>
                </A.Mass>
              ))}
            </A.List>
          </A.RightPannel>
        </A.Layout>
      </A.DesktopOnly>
    </A.Container>
  );
};

export default Article;
