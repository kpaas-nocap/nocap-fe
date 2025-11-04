import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "../styles/StyledNDet";
import axios from "axios";
import Continue from "./Continue";

function formatContentToParagraphs(content) {
  if (!content) return [];

  // 🧹 1️⃣ 안내문 3줄 제거
  const bannedPatterns = [
    /글자\s*크기\s*설정\s*파란원을\s*좌우로\s*움직이시면\s*글자크기가\s*변경\s*됩니다[.\s]*/gi,
    /가\s*매우\s*작은\s*폰트\s*작은\s*폰트\s*보통\s*폰트\s*큰\s*폰트\s*매우\s*큰\s*폰트\s*가\s*이\s*글자크기로\s*변경됩니다[.\s]*/gi,
    /\(예시\)\s*가장\s*빠른\s*뉴스가\s*있고\s*다양한\s*정보,\s*쌍방향\s*소통이\s*숨쉬는\s*다음뉴스를\s*만나보세요[.\s]*/gi,
  ];
  bannedPatterns.forEach((pattern) => {
    content = content.replace(pattern, "");
  });

  // 🧹 2️⃣ 불필요한 공백 제거
  content = content.replace(/\s{2,}/g, " ").trim();

  // 🧹 3️⃣ 문장 단위 분리 (날짜 등 숫자 보호)
  const sentenceRegex = /(?<=[^0-9][.?!])\s+(?=[가-힣A-Z])/g;
  // 숫자 다음 마침표는 끊지 않음 → "2025.10.7." 보호됨

  const sentences = content.split(sentenceRegex);

  // ✅ 문장 배열로 반환
  return sentences.filter((s) => s.trim().length > 0);
}

const NDetail = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goAnal = () => navigate(`/analysis`);
  const goMy = () => navigate(`/my`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goArticle = () => navigate(`/analysis/article`);
  const goIntro = () => navigate(`/introduce`);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recentAnalyses, setRecentAnalyses] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    console.log("취소 버튼 눌림!");
    setIsModalOpen(false);
  };

  const handleLogoutClick = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login/local");
      return;
    }

    try {
      const url = news?.url;
      if (!url) {
        alert("뉴스 URL 정보를 찾을 수 없습니다.");
        return;
      }

      const checkRes = await axios.get(
        `https://www.nocap.kr/api/nocap/analysis/check`,
        {
          params: {
            id: news?.analysisId || 0,
            url: url,
          },
          headers: {
            Authorization: token,
          },
        }
      );

      const { analyzed, plan, analysisId } = checkRes.data;

      if (analyzed && plan === "PREMIUM") {
        // ✅ 기존 분석 결과로 바로 이동
        navigate("/loading");
        const detailRes = await axios.get(
          `https://www.nocap.kr/api/nocap/analysis/${analysisId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        navigate("/analysis/article", {
          state: { analysisId },
        });
      } else if (!analyzed && plan === "PREMIUM") {
        // ✅ 분석은 안 되어 있고 PREMIUM 이면 바로 분석 실행
        handleConfirm("PREMIUM");
      } else {
        // ✅ 이외 모든 경우는 모달 띄움
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error("❌ 분석 이력 확인 실패:", err);
      setIsModalOpen(true); // 실패해도 모달 열기
    }
  };

  // PREMIUM 분석 실행
  const handleConfirm = async (plan = "PREMIUM") => {
    await runAnalysis(plan);
  };

  // 일반 분석 실행
  const handleGeneral = async () => {
    await runAnalysis("NORMAL");
  };

  // 공통 분석 실행 함수
  const runAnalysis = async (plan) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login/local");
      return;
    }

    navigate("/loading");

    try {
      const userRes = await axios.get(
        "https://www.nocap.kr/api/nocap/user/me",
        {
          headers: {
            Authorization: `${token}`, // ✅ Bearer 꼭 포함
          },
        }
      );
      const userId = userRes.data.id;

      const searchNewsDto = {
        url: news?.url || "",
        title: news?.title || "",
        content: news?.content || "",
        date: news?.date || "",
        image: news?.image || "",
      };

      // ✅ 보내는 데이터 콘솔 확인
      const payload = {
        userId,
        plan,
        searchNewsDto,
      };
      console.log("📦 분석 요청 payload:", payload);

      const analysisRes = await axios.post(
        "https://www.nocap.kr/api/nocap/analysis",
        payload,
        {
          headers: {
            Authorization: `${token}`, // 🔥 Bearer 잊지 말기
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ 분석 결과:", analysisRes.data);

      if (analysisRes.status === 200) {
        navigate("/analysis/article", {
          state: { analysisId: analysisRes.data.analysisId },
        });
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "❌ 응답 오류:",
          error.response.status,
          error.response.data
        );
      } else {
        console.error("❌ 네트워크 오류:", error.message);
      }
      alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
      navigate(-1);
    }
  };

  useEffect(() => {
    const fetchRecentAnalyses = async () => {
      try {
        // ✅ 토큰 필요 없음
        const res = await axios.get("https://www.nocap.kr/api/nocap/analysis");

        // ✅ 최신순 정렬 및 최대 8개만 표시
        const sorted = (res.data || [])
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 8);

        setRecentAnalyses(sorted);
      } catch (error) {
        console.error("❌ 전체 분석 데이터 조회 실패:", error);
      }
    };

    fetchRecentAnalyses();
  }, []);

  const formatRelativeTime = (isoDateStr) => {
    const now = new Date();
    const target = new Date(isoDateStr);
    const diffMs = now - target;
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHr = Math.floor(diffMin / 60);

    if (diffHr >= 24) {
      return target.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    } else if (diffHr >= 1) {
      return `${diffHr}시간 전`;
    } else {
      return `${diffMin}분 전`;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 읽기
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  // 컴포넌트 상단
  const location = useLocation();
  const news = location.state;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(news?.url);
      alert("기사 링크가 복사되었습니다!");
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };

  // ✅ content 콘솔 확인
  useEffect(() => {
    if (news?.content) {
      console.log("받아온 content:", news.content);
    } else {
      console.warn("content가 전달되지 않았습니다.");
    }

    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, [news]);

  const [reporter, setReporter] = useState("");
  const [date, setDate] = useState("");

  // ✅ HTML 제거는 필요 없으므로 content 문자열 그대로 처리
  const formattedParagraphs = formatContentToParagraphs(news?.content);

  const { popNewsId } = location.state || {}; // 혹시 필요 시

  // const goCheck = async () => {
  //   const token = localStorage.getItem("accessToken");
  //   if (!token) {
  //     alert("로그인이 필요합니다.");
  //     navigate("/login/local");
  //     return;
  //   }

  //   // ✅ 로딩 페이지로 이동
  //   navigate("/loading");

  //   try {
  //     // 1️⃣ 현재 로그인한 사용자 정보 조회
  //     const userRes = await axios.get(
  //       "https://www.nocap.kr/api/nocap/user/me",
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );

  //     const userId = userRes.data.id;
  //     console.log("✅ 로그인한 userId:", userId);

  //     // 2️⃣ 뉴스 데이터 변환
  //     const searchNewsDto = {
  //       url: news?.url || "",
  //       title: news?.title || "",
  //       content: news?.content || "",
  //       date: news?.date || "",
  //       image: news?.image || "",
  //     };

  //     console.log("📦 전송할 searchNewsDto:", searchNewsDto);

  //     // 3️⃣ 분석 요청 (plan: PREMIUM 추가)
  //     const analysisRes = await axios.post(
  //       "https://www.nocap.kr/api/nocap/analysis",
  //       {
  //         userId: userId,
  //         plan: "PREMIUM", // ✅ 추가
  //         searchNewsDto: searchNewsDto,
  //       },
  //       {
  //         headers: {
  //           Authorization: token,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log("✅ 분석 결과:", analysisRes.data);

  //     // 4️⃣ 분석 결과 페이지로 이동 (analysisId만 전달)
  //     if (analysisRes.status === 200) {
  //       navigate("/analysis/article", {
  //         state: { analysisId: analysisRes.data.analysisId }, // ✅ 전달
  //       });
  //     }
  //   } catch (error) {
  //     console.error("❌ 분석 요청 실패:", error);
  //     alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
  //     navigate(-1);
  //   }
  // };

  return (
    <N.Container>
      <N.MobileOnly>
        <N.Header>
          <img
            id="menu"
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
            onClick={goBack}
          />
          <div>뉴스</div>
        </N.Header>
      </N.MobileOnly>

      <N.DesktopOnly>
        <N.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <N.Menu>
            <div id="tag" onClick={goMain} style={{ cursor: "pointer" }}>
              홈
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goIntro}>
              NOCAP 소개
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goNews}>
              뉴스
              <div id="circle" />
            </div>
            <div
              id="tag"
              onClick={isLoggedIn ? goMy : () => navigate("/login/local")}
              style={{ cursor: "pointer" }}
            >
              {isLoggedIn ? "마이페이지" : "로그인/회원가입"}
            </div>
          </N.Menu>
        </N.Head>
      </N.DesktopOnly>

      <N.Body>
        <N.News>
          <N.Title>
            {news?.category && <N.Category>{news.category}</N.Category>}
            <div id="title">{news?.title || "제목 없음"}</div>
          </N.Title>

          <N.Detail>
            <N.Info>
              {/* ✅ 전달받은 날짜 출력 */}
              <div id="date">
                {news?.date
                  ? new Date(news.date).toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </div>
            </N.Info>
            <img
              src={`${process.env.PUBLIC_URL}/images/link.svg`}
              alt="link"
              onClick={handleCopyUrl}
              style={{ cursor: "pointer" }}
            />
          </N.Detail>
          <N.MobileOnly>
            <N.Hr />
          </N.MobileOnly>

          <N.Img>
            <img src={news?.image || "/images/news.jpg"} alt="news" />
          </N.Img>
          {/* <N.Content dangerouslySetInnerHTML={{ __html: parsedContent }} /> */}
          <N.Content>
            {formattedParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </N.Content>

          <N.Button onClick={handleLogoutClick}>팩트체크하기</N.Button>
          {isModalOpen && (
            <Continue
              onConfirm={() => handleConfirm("PREMIUM")}
              onGeneral={handleGeneral}
              onCancel={() => setIsModalOpen(false)}
            />
          )}
        </N.News>

        <N.DesktopOnly>
          <N.Recent>
            <N.RTitle>최근 분석된 뉴스 보기</N.RTitle>

            <N.RList>
              {recentAnalyses.map((item) => (
                <N.RComp
                  style={{ cursor: "pointer" }}
                  key={item.analysisId}
                  onClick={() =>
                    navigate("/analysis/article", {
                      state: { analysisId: item.analysisId },
                    })
                  }
                >
                  <N.RDet>
                    {item.category && <N.RCate>{item.category}</N.RCate>}
                    <N.RTit>{item.mainNewsTitle}</N.RTit>
                    <N.RTime>{formatRelativeTime(item.date)}</N.RTime>
                  </N.RDet>
                  <N.RImg>
                    <img
                      src={
                        item.image ||
                        `${process.env.PUBLIC_URL}/images/news.jpg`
                      }
                      alt="news"
                    />
                  </N.RImg>
                </N.RComp>
              ))}
              <N.RHr />
            </N.RList>
          </N.Recent>
        </N.DesktopOnly>
      </N.Body>
    </N.Container>
  );
};

export default NDetail;
