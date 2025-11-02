import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "../styles/StyledNSearch";
import axios from "axios";

const NSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState("정치");
  const categories = [
    "정치",
    "경제",
    "사회",
    "생활/문화",
    "세계",
    "IT/과학",
    "기타",
  ];

  const goDet = () => navigate(`/news/detail`);
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goAnal = () => navigate(`/analysis`);
  const goMy = () => navigate(`/my`);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  const [query, setQuery] = useState(keyword); // ✅ input과 연결될 상태
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ 검색 함수
  const fetchData = async (kw) => {
    try {
      const res = await axios.get(
        `https://www.nocap.kr/api/nocap/search?search=${encodeURIComponent(kw)}`
      );
      setResults(res.data);
    } catch (error) {
      console.error("검색 실패:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 처음 진입하거나 URL keyword 바뀌면 fetch
  useEffect(() => {
    if (keyword) {
      setQuery(keyword); // 쿼리 파라미터 → input value로
      fetchData(keyword);
    }
  }, [keyword]);

  // ✅ 엔터로 검색
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/news/search?keyword=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    if (query?.trim()) {
      const delayDebounce = setTimeout(() => {
        fetchData(query);
      }, 300); // 입력 후 300ms 뒤 실행

      return () => clearTimeout(delayDebounce); // 타이머 초기화
    } else {
      setResults([]); // 빈 문자열일 때 결과 초기화
    }
  }, [query]);

  // ✅ 뉴스 클릭 시 상세 페이지 이동 + 조회기록 저장
  const handleNewsClick = async (item) => {
    const token = localStorage.getItem("accessToken");

    // 조회기록 저장 (로그인 시에만)
    if (token) {
      try {
        await axios.post(
          "https://www.nocap.kr/api/nocap/history/record",
          {
            url: item.url,
            title: item.title,
            content: item.content,
            date: item.date,
            image: item.image,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("🟢 조회기록 저장 완료");
      } catch (err) {
        console.error("⚠️ 조회기록 저장 실패:", err);
      }
    } else {
      console.log("🔓 비로그인 상태 → 조회기록 저장 생략");
    }

    // ✅ 뉴스 상세 페이지로 state 직접 전달 (News 페이지와 동일)
    navigate("/news/detail", { state: item });
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
            <div id="tag" title="최신 뉴스 보기">
              뉴스
              <div id="circle" />
            </div>
            <div id="tag" onClick={goAnal} title="뉴스 기사 분석하러 가기">
              기사분석
            </div>
            <div id="tag" onClick={goMy} title="마이 페이지로 이동">
              마이페이지
            </div>
          </N.Menu>
        </N.Head>
      </N.DesktopOnly>

      <N.Body>
        <N.Search>
          <N.Input>
            <img
              src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
              alt="search"
            />
            <input
              type="text"
              placeholder="키워드를 입력하세요"
              value={query} // ✅ 검색어 유지
              onChange={(e) => setQuery(e.target.value)} // ✅ 수정 가능
              onKeyDown={handleKeyDown} // ✅ 엔터로 검색
            />
          </N.Input>
          <N.Hr />
        </N.Search>

        {/* <N.Category>
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={selectedCategory === item ? "active" : ""}
            >
              {item}
            </div>
          ))}
        </N.Category> */}

        <N.List>
          {loading ? (
            <div>로딩 중...</div>
          ) : results.length === 0 ? (
            <div>검색 결과가 없습니다.</div>
          ) : (
            results.map((item, idx) => (
              <N.Img
                key={idx}
                onClick={() => handleNewsClick(item)}
                style={{ cursor: "pointer" }}
              >
                <N.Back />
                <N.TImg>
                  <N.Up bgImage={item.image}></N.Up>
                  <N.Down bgImage={item.image}>
                    <N.Title>{item.title}</N.Title>
                  </N.Down>
                </N.TImg>
              </N.Img>
            ))
          )}
        </N.List>
      </N.Body>
    </N.Container>
  );
};

export default NSearch;
