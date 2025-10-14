import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "../styles/StyledNDet";
import axios from "axios";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const goCheck = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login/local");
      return;
    }

    // ✅ 로딩 페이지로 이동
    navigate("/loading");

    try {
      // 1️⃣ 현재 로그인한 사용자 정보 조회
      const userRes = await axios.get(
        "https://www.nocap.kr/api/nocap/user/me",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const userId = userRes.data.id;
      console.log("✅ 로그인한 userId:", userId);

      // 2️⃣ 뉴스 데이터 변환
      const searchNewsDto = {
        url: news?.url || "",
        title: news?.title || "",
        content: news?.content || "",
        date: news?.date || "",
        image: news?.image || "",
      };

      console.log("📦 전송할 searchNewsDto:", searchNewsDto);

      // 3️⃣ 분석 요청 (plan: PREMIUM 추가)
      const analysisRes = await axios.post(
        "https://www.nocap.kr/api/nocap/analysis",
        {
          userId: userId,
          plan: "PREMIUM", // ✅ 추가
          searchNewsDto: searchNewsDto,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ 분석 결과:", analysisRes.data);

      // 4️⃣ 분석 결과 페이지로 이동 (analysisId만 전달)
      if (analysisRes.status === 200) {
        navigate("/analysis/article", {
          state: { analysisId: analysisRes.data.analysisId }, // ✅ 전달
        });
      }
    } catch (error) {
      console.error("❌ 분석 요청 실패:", error);
      alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
      navigate(-1);
    }
  };

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
            <div
              id="tag"
              onClick={isLoggedIn ? goMy : () => navigate("/login/local")}
            >
              {isLoggedIn ? "마이페이지" : "로그인/회원가입"}
            </div>
          </N.Menu>
        </N.Head>
      </N.DesktopOnly>

      <N.Body>
        <N.News>
          <N.Title>
            <N.Category>{news?.category || "카테고리"}</N.Category>
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

          <N.Button onClick={goCheck}>팩트체크하기</N.Button>
        </N.News>

        <N.DesktopOnly>
          <N.Recent>
            <N.RTitle>최근 분석된 뉴스 보기</N.RTitle>

            <N.RList>
              <N.RComp onClick={goArticle}>
                <N.RDet>
                  <N.RCate>사회</N.RCate>
                  <N.RCc>v.daum.net</N.RCc>
                  <N.RTit>
                    “상속세 60%, 국가가 상속 받냐” 한국서 더는 못 살겠다…떠나는
                    사람 ‘세계 4위’
                  </N.RTit>
                  <N.RTime>5시간 전</N.RTime>
                </N.RDet>
                <N.RImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/news.jpg`}
                    alt="news"
                  />
                </N.RImg>
              </N.RComp>
              <N.RHr />
            </N.RList>
          </N.Recent>
        </N.DesktopOnly>
      </N.Body>
    </N.Container>
  );
};

export default NDetail;
