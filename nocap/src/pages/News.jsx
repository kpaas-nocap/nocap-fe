import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as N from "../styles/StyledNews";
import NSide from "./NSide"; // 컴포넌트 경로에 따라 조정
import axios from "axios";

const News = () => {
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
  const categoryMap = {
    정치: 100,
    경제: 101,
    사회: 102,
    "생활/문화": 103,
    세계: 104,
    "IT/과학": 105,
    기타: 106,
  };

  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryNews = async (categoryName) => {
    const categoryCode = categoryMap[categoryName];
    if (!categoryCode) return;

    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.nocap.kr/api/nocap/search/category/${categoryCode}`
      );
      setNewsList(res.data); // 백엔드 응답에 맞게 조정
    } catch (error) {
      console.error("카테고리 뉴스 조회 실패:", error);
      setNewsList([]);
    } finally {
      setLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("news");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const navigate = useNavigate();

  const goDet = () => navigate(`/news/detail`);
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goMy = () => navigate(`/my`);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 읽기
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  // ✅ 검색어 상태
  const [query, setQuery] = useState("");
  // ✅ 최근 검색어 상태
  const [recentSearches, setRecentSearches] = useState([]);

  // ✅ 로컬스토리지에서 최근 검색어 불러오기
  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  // ✅ 엔터 입력 시 저장 + 이동
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      const newSearches = [query, ...recentSearches].slice(0, 10);
      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches));

      navigate(`/search/result?keyword=${encodeURIComponent(query)}`);
      setQuery(""); // 입력창 초기화
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryNews(selectedCategory);
    }
  }, [selectedCategory]);

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
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
            alt="search"
            onClick={toggleSidebar}
          />
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
        <N.DesktopOnly>
          <N.Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.svg`}
              alt="search"
            />
            <input
              type="text"
              placeholder="키워드를 입력하세요"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </N.Search>
          <N.Hr />
        </N.DesktopOnly>

        <N.Category>
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelectedCategory(item);
                fetchCategoryNews(item); // 클릭 시 뉴스 요청
              }}
              className={selectedCategory === item ? "active" : ""}
            >
              {item}
            </div>
          ))}
        </N.Category>

        <N.List>
          {loading ? (
            <div>로딩 중...</div>
          ) : newsList.length === 0 ? (
            <div>뉴스가 없습니다.</div>
          ) : (
            newsList.map((item, idx) => (
              <N.Img
                key={idx}
                onClick={() => navigate("/news/detail", { state: item })}
              >
                <N.Back />
                <N.TImg>
                  <N.Up $bg={item.image}>{selectedCategory}</N.Up>
                  <N.Down $bg={item.image}>
                    <N.Title>{item.title}</N.Title>
                  </N.Down>
                </N.TImg>
              </N.Img>
            ))
          )}
        </N.List>
      </N.Body>

      <NSide
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </N.Container>
  );
};

export default News;
