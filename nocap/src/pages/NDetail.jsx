import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "../styles/StyledNDet";

function formatContentToParagraphs(content) {
  if (!content) return [];

  // 1. 출처, 기자 이메일, 공백 등의 불필요한 문장 제거
  const bannedPatterns = [
    /\[사진 출처.*?\]/g,
    /©.*?무단 전재.*?(금지)?/g,
    /기자\(.*?\)/g,
    /\/?뉴스1|연합뉴스/g,
    /https?:\/\/\S+/g, // URL 제거
  ];
  bannedPatterns.forEach((pattern) => {
    content = content.replace(pattern, "");
  });

  // 2. 문단 나누기 기준: 마침표/물음표/느낌표 뒤 공백 기준으로 문장 분리
  const sentences = content.split(/(?<=[.?!])\s+(?=[^a-z])/gi);

  // 3. 문단은 2~3문장씩 묶기
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 2) {
    const para = sentences
      .slice(i, i + 2)
      .join(" ")
      .trim();
    if (para) paragraphs.push(para);
  }

  return paragraphs;
}

const NDetail = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goCheck = () => navigate(`/loading`);
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

  // ✅ content 콘솔 출력
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
  const [parsedContent, setParsedContent] = useState("");

  useEffect(() => {
    if (!news?.content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(news.content, "text/html");

    const section = doc.querySelector("section");
    if (!section) return;

    // ✅ 순서대로 정렬된 요소 리스트
    const nodes = Array.from(section.childNodes);

    const allowedTags = ["P", "FIGURE"];
    const bannedKeywords = [
      "글자크기",
      "제보",
      "Copyright",
      "저작권",
      "기사 원문",
      "MBC 뉴스",
      "영상편집",
      "전화",
      "이메일",
      "카카오톡",
    ];

    const filtered = nodes.filter((node) => {
      if (!(node instanceof HTMLElement)) return false;

      const tag = node.tagName;
      const text = node.textContent?.trim() || "";

      return (
        allowedTags.includes(tag) &&
        !bannedKeywords.some((kw) => text.includes(kw))
      );
    });

    // ✅ node.outerHTML 로 재조립
    const cleanHTML = filtered.map((el) => el.outerHTML).join("\n\n");
    setParsedContent(cleanHTML);
  }, [news]);

  const formattedParagraphs = formatContentToParagraphs(news?.content);

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
              <div id="reporter">{reporter}</div>
              <div id="date">입력 {date}</div>
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
