import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMy";
import Logout from "./Logout";
import axios from "axios";

const tabs = ["최근 본 뉴스", "분석 기록", "북마크", "내 댓글"];

const My = () => {
  const navigate = useNavigate();

  const goRecent = () => navigate(`/my/recent`);
  const goAnal = () => navigate(`/my/analysis`);
  const goBookmark = () => navigate(`/my/bookmark`);
  const goComment = () => navigate(`/my/comment`);
  const goBack = () => navigate(-1);
  const goSetting = () => navigate(`/my/setting`);
  const goPre = () => navigate(`/premium`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goEdit = () => navigate(`/my/edit`);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState(""); // ✅ 사용자 이름 저장

  const [infoMessageVisible, setInfoMessageVisible] = useState(false); // ✅ 상태 추가

  const [selected, setSelected] = useState(0);

  // 바의 위치 및 너비 정보
  const positions = [0, 132, 255, 359];
  const widths = [110, 110, 90, 90];

  const handleInfoClick = () => {
    setInfoMessageVisible((prev) => !prev); // ✅ 토글
  };

  const [commentCount, setCommentCount] = useState(0); // ✅ 댓글 개수 상태
  const [analysisCount, setAnalysisCount] = useState(0); // 분석 기록 개수
  const [bookmarkCount, setBookmarkCount] = useState(0); // ✅ 북마크 개수 추가
  const [historyCount, setHistoryCount] = useState(0); // ✅ 최근 본 뉴스 개수 추가

  // ✅ 유저 정보 불러오기
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("로그인 토큰 없음");
          return;
        }

        const res = await axios.get("https://www.nocap.kr/api/nocap/user/me", {
          headers: {
            Authorization: `${token}`,
          },
        });

        setUsername(res.data.username); // ✅ username 저장
      } catch (err) {
        console.error("유저 정보 불러오기 실패:", err);
      }
    };

    fetchUser();

    const fetchAnalysisCount = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/analysis/my",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (Array.isArray(res.data)) {
          setAnalysisCount(res.data.length);
        }
      } catch (err) {
        console.error("분석 기록 불러오기 실패:", err);
      }
    };

    fetchAnalysisCount();

    // ✅ 댓글 개수 불러오기
    const fetchCommentCount = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/comment/my",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (Array.isArray(res.data)) {
          setCommentCount(res.data.length); // ✅ 댓글 개수 저장
        }
      } catch (err) {
        console.error("댓글 개수 불러오기 실패:", err);
      }
    };

    fetchCommentCount();

    // ✅ 북마크 수
    const fetchBookmarkCount = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get("https://www.nocap.kr/api/nocap/bookmark", {
          headers: { Authorization: `${token}` },
        });
        if (Array.isArray(res.data)) setBookmarkCount(res.data.length);
      } catch (err) {
        console.error("북마크 불러오기 실패:", err);
      }
    };

    fetchBookmarkCount();

    // ✅ 최근 본 뉴스 수
    const fetchHistoryCount = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get("https://www.nocap.kr/api/nocap/history", {
          headers: { Authorization: `${token}` },
        });
        if (Array.isArray(res.data)) setHistoryCount(res.data.length);
      } catch (err) {
        console.error("최근 본 뉴스 불러오기 실패:", err);
      }
    };

    fetchHistoryCount(); // ✅ 호출 추가
  }, [navigate]);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("로그아웃 시도: 토큰 없음");
        navigate("/login");
        return;
      }

      // ✅ 백엔드 로그아웃 API 호출
      await axios.post("https://www.nocap.kr/auth/logout", null, {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log("백엔드 로그아웃 완료");
    } catch (err) {
      console.error("로그아웃 API 호출 실패:", err);
      // 실패해도 토큰은 지워주고 로그인 페이지로 이동
    } finally {
      // ✅ 토큰 삭제 + 로그인 페이지 이동
      localStorage.removeItem("accessToken");
      navigate("/");
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    console.log("취소 버튼 눌림!");
    setIsModalOpen(false);
  };

  //Arc에 띄울 애들 리스트
  const [compList, setCompList] = useState([]); // 출력할 데이터 리스트
  const [commentList, setCommentList] = useState([]);

  const fetchTabData = async (index) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("토큰 없음");
        return;
      }

      // 🟦 '내 댓글' 탭
      if (index === 3) {
        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/comment/my",
          {
            headers: { Authorization: token },
          }
        );

        if (Array.isArray(res.data)) {
          const commentData = res.data;

          // 각 댓글의 analysisId로 뉴스 정보 조회
          const detailRequests = commentData.map((comment) =>
            axios.get(
              `https://www.nocap.kr/api/nocap/analysis/${comment.analysisId}`,
              {
                headers: { Authorization: token },
              }
            )
          );

          const detailResponses = await Promise.all(detailRequests);

          // 댓글 + 뉴스 정보 병합
          const combined = commentData.map((comment, idx) => {
            const news = detailResponses[idx].data;

            // ✅ 날짜 형식 변환 함수
            const formatDate = (dateStr) => {
              const date = new Date(dateStr);
              const diff = (Date.now() - date.getTime()) / 1000; // 초 단위 차이
              if (diff < 60) return `${Math.floor(diff)}초 전`;
              if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
              if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
              return `${date.getFullYear()}.${String(
                date.getMonth() + 1
              ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
            };

            return {
              content: comment.content,
              timeAgo: formatDate(comment.date), // 🕒 댓글 작성일 → 상대시간 변환
              likes: comment.recommendation, // 👍 좋아요 수
              replies: comment.replyCount ?? 0, // 💬 답글 수 (없으면 0)
              newsImage: news.image,
              newsTitle: news.mainNewsTitle,
              newsDate: formatDate(news.date),
            };
          });

          setCommentList(combined);
        }

        return; // ✅ '내 댓글' 탭 처리 후 종료
      }

      // 🟩 기존 탭들 (0~2)
      let result = [];

      if (index === 0) {
        const res = await axios.get("https://www.nocap.kr/api/nocap/history", {
          headers: { Authorization: token },
        });
        result = res.data.map((item) => ({
          title: item.title,
          image: item.image,
        }));
      } else if (index === 1) {
        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/analysis/my",
          {
            headers: { Authorization: token },
          }
        );
        result = res.data.map((item) => ({
          title: item.mainNewsTitle,
          image: item.image,
        }));
      } else if (index === 2) {
        const bookmarkRes = await axios.get(
          "https://www.nocap.kr/api/nocap/bookmark",
          {
            headers: { Authorization: token },
          }
        );

        const fetches = bookmarkRes.data.map((item) =>
          axios.get(
            `https://www.nocap.kr/api/nocap/analysis/${item.analysisId}`,
            {
              headers: { Authorization: token },
            }
          )
        );

        const detailRes = await Promise.all(fetches);
        result = detailRes.map((r) => ({
          title: r.data.mainNewsTitle,
          image: r.data.image,
        }));
      }

      setCompList(result);
    } catch (err) {
      console.error("탭 데이터 불러오기 실패:", err);
    }
  };

  const handleTabClick = (index) => {
    setSelected(index);
    fetchTabData(index);
  };

  return (
    <M.Container>
      <M.MobileOnly>
        <M.Header>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
            onClick={goBack}
          />
          <div>마이페이지</div>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/setting.svg`}
            alt="setting"
            onClick={goSetting}
          />
        </M.Header>
      </M.MobileOnly>

      <M.DesktopOnly>
        <M.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <M.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기" onClick={goNews}>
              뉴스
            </div>
            <div id="tag">
              마이페이지
              <div id="circle" />
            </div>
          </M.Menu>
        </M.Head>
      </M.DesktopOnly>

      <M.DesktopOnly>
        <M.Nav>
          <M.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/point_c.png`}
              alt="point"
            />
            <div>내 포인트</div>
          </M.NComp>
          <M.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/premium_n.png`}
              alt="point"
            />
            <div>프리미엄</div>
          </M.NComp>
          <M.NComp onClick={goEdit}>
            <img
              src={`${process.env.PUBLIC_URL}/images/edit_n.png`}
              alt="point"
            />
            <div>프로필 수정</div>
          </M.NComp>
          <M.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/buy_n.png`}
              alt="point"
            />
            <div>구매내역</div>
          </M.NComp>
          <M.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/inquiry_n.png`}
              alt="point"
            />
            <div>문의하기</div>
          </M.NComp>
        </M.Nav>
      </M.DesktopOnly>

      <M.Body>
        <M.Profile>
          <M.Detail>
            <M.DesktopOnly>
              <M.Id>{username}님</M.Id>
            </M.DesktopOnly>

            <M.Img>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.png`}
                alt=""
              />
            </M.Img>

            <M.MobileOnly>
              <M.Identity>
                <div id="rank">일반사용자</div>
                <div id="name">{username || "사용자"}님</div>
              </M.Identity>
            </M.MobileOnly>
          </M.Detail>
          <M.Logout onClick={handleLogoutClick}>로그아웃</M.Logout>
          {isModalOpen && (
            <Logout onConfirm={handleConfirm} onCancel={handleCancel} />
          )}
        </M.Profile>

        <M.MobileOnly>
          <M.Info onClick={handleInfoClick}>
            {infoMessageVisible && (
              <M.InfoMessage>👇 눌러서 프리미엄 업그레이드</M.InfoMessage>
            )}
            <img src={`${process.env.PUBLIC_URL}/images/info.svg`} alt="info" />
          </M.Info>
        </M.MobileOnly>

        <M.Point>
          <M.Left>
            <img src={`${process.env.PUBLIC_URL}/images/left.png`} alt="left" />
            <div>10</div>
          </M.Left>
          <M.Hr />
          <M.Rank onClick={goPre}>
            <img
              src={`${process.env.PUBLIC_URL}/images/diamond.png`}
              alt="diamond"
            />
            <div>Free</div>
          </M.Rank>
        </M.Point>

        <M.Chance>
          <div id="base">분석할 수 있는 기회가</div>
          <div id="num">10번</div>
          <div id="base">남았어요</div>
        </M.Chance>

        <M.Bar>
          <div id="bar" />
          <img src={`${process.env.PUBLIC_URL}/images/rank.svg`} alt="rank" />
        </M.Bar>

        <M.Number>
          <div>0번</div>
          <div>10번</div>
        </M.Number>

        <M.MobileOnly>
          <M.Archive>
            <M.ATitle>
              <div id="name">{username || "사용자"}</div>
              <div id="detail">님의 아카이브</div>
            </M.ATitle>
            <M.List>
              <M.Component onClick={goRecent}>
                <div id="title">최근 본 뉴스</div>
                <div id="group">
                  <div id="num">{historyCount}</div>
                  <div id="detail">개</div>
                </div>
              </M.Component>
              <M.Component onClick={goAnal}>
                <div id="title">분석 기록</div>
                <div id="group">
                  <div id="num">{analysisCount}</div> {/* ✅ 동적 출력 */}
                  <div id="detail">개</div>
                </div>
              </M.Component>
              <M.Component onClick={goBookmark}>
                <div id="title">북마크</div>
                <div id="group">
                  <div id="num">{bookmarkCount}</div>
                  <div id="detail">개</div>
                </div>
              </M.Component>
              <M.Component onClick={goComment}>
                <div id="title">내 댓글</div>
                <div id="group">
                  <div id="num">{commentCount}</div> {/* ✅ 동적 출력 */}
                  <div id="detail">개</div>
                </div>
              </M.Component>
            </M.List>
          </M.Archive>
        </M.MobileOnly>

        <M.DesktopOnly>
          <M.Arc>
            <M.Choice>
              <M.Pick>
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    id="name"
                    className={selected === index ? "active" : ""}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab}
                  </div>
                ))}
              </M.Pick>

              <M.HrWrapper>
                <M.Hr1 />
                <M.Underline
                  style={{
                    transform: `translateX(${positions[selected]}px)`,
                    width: `${widths[selected]}px`,
                  }}
                />
              </M.HrWrapper>
            </M.Choice>
            <M.Box>
              {selected === 3 ? (
                <M.CommentList>
                  {commentList.map((item, i) => (
                    <M.CommentItem key={i}>
                      <M.Content>{item.content}</M.Content>
                      <M.News>
                        <img src={item.newsImage} alt="image" />
                        <M.Rmf>
                          <div id="title">{item.newsTitle}</div>
                          <div id="date">{item.newsDate}</div>
                        </M.Rmf>
                      </M.News>
                      <M.Icon>
                        <div>{item.timeAgo}</div>
                        <div>좋아요 {item.likes}</div>
                      </M.Icon>
                      <M.Hr2 />
                    </M.CommentItem>
                  ))}
                </M.CommentList>
              ) : (
                <M.Li>
                  {compList.map((item, i) => (
                    <M.Comp key={i}>
                      <img src={item.image} alt="preview" />
                      <div>{item.title}</div>
                    </M.Comp>
                  ))}
                </M.Li>
              )}
            </M.Box>
          </M.Arc>
        </M.DesktopOnly>
      </M.Body>
    </M.Container>
  );
};

export default My;
