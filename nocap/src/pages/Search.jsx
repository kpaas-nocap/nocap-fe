import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";

const Search = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goMy = () => navigate(`/my`);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState(""); // 입력값
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어 리스트

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 읽기
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  // ✅ 컴포넌트 처음 마운트 시 localStorage 불러오기
  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  // ✅ Enter 입력 시 저장
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      const newSearches = [query, ...recentSearches].slice(0, 10);
      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches));

      if (isMobile) {
        // 📱 모바일: 기존대로 검색 결과 페이지로 이동
        navigate(`/search/result?keyword=${encodeURIComponent(query)}`);
      } else {
        // 💻 데스크탑: 검색어 포함하여 뉴스 페이지로 이동
        navigate(`/news?keyword=${encodeURIComponent(query)}`);
      }

      setQuery(""); // 입력창 비우기
    }
  };

  // ✅ 개별 삭제
  const handleDelete = (index) => {
    const updated = recentSearches.filter((_, i) => i !== index);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  // ✅ input 참조
  const inputRef = useRef(null);

  // ✅ 페이지 진입 시 자동 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Container>
      <S.MobileOnly>
        <S.Header>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
            onClick={goBack}
          />
          <S.Input>
            <img
              src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
              alt="search"
            />
            <input
              ref={inputRef} // ✅ 자동 포커스
              type="text"
              placeholder="뉴스 키워드 또는 기사 URL을 입력하세요."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.Input>
        </S.Header>
      </S.MobileOnly>

      <S.DesktopOnly>
        <S.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <S.Menu>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goMain}>
              홈
              <div id="circle" />
            </div>
            <div id="tag" style={{ cursor: "pointer" }}>
              NOCAP 소개
            </div>
            <div id="tag" onClick={goNews} style={{ cursor: "pointer" }}>
              뉴스
            </div>
            <div
              id="tag"
              onClick={isLoggedIn ? goMy : () => navigate("/login/local")}
              style={{ cursor: "pointer" }}
            >
              {isLoggedIn ? "마이페이지" : "로그인/회원가입"}
            </div>
          </S.Menu>
        </S.Head>
      </S.DesktopOnly>

      <S.Body>
        <S.DesktopOnly>
          <S.Input>
            <img
              src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
              alt="search"
            />
            <input
              ref={inputRef} // ✅ 자동 포커스
              type="text"
              placeholder="뉴스 키워드 또는 기사 URL을 입력하세요."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.Input>
        </S.DesktopOnly>

        <S.Recent>
          <S.Title>최근 검색</S.Title>
          <S.List>
            {recentSearches.length === 0 ? (
              <div
                style={{
                  padding: "30px",
                  color: "#888",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                  fontFamily: "Pretendard",
                  fontSize: "15px",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/mark.svg`}
                  style={{ width: "38px", height: "38px" }}
                />
                최근 검색 기록이 없습니다.
              </div>
            ) : (
              recentSearches.map((item, index) => (
                <S.Result key={index}>
                  <img
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                  />
                  <div>{item}</div>
                  <img
                    id="x"
                    src={`${process.env.PUBLIC_URL}/images/x_b.svg`}
                    alt="x"
                    onClick={() => handleDelete(index)}
                    style={{ cursor: "pointer" }}
                  />
                </S.Result>
              ))
            )}
          </S.List>
        </S.Recent>
      </S.Body>
    </S.Container>
  );
};

export default Search;
