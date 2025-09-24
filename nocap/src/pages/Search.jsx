import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";

const Search = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [query, setQuery] = useState(""); // 입력값
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어 리스트

  // ✅ 컴포넌트 처음 마운트 시 localStorage 불러오기
  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  // ✅ Enter 입력 시 저장
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      const newSearches = [query, ...recentSearches].slice(0, 10); // 최대 10개 저장
      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches));
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

  return (
    <S.Container>
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
            placeholder="기사를 검색하세요."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </S.Input>
      </S.Header>

      <S.Recent>
        <S.Title>최근 검색</S.Title>
        <S.List>
          {recentSearches.map((item, index) => (
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
          ))}
        </S.List>
      </S.Recent>
    </S.Container>
  );
};

export default Search;
