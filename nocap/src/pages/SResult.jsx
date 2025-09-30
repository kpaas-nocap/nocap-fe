import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/StyledSResult";
import axios from "axios";
import SSidebar from "./SSidebar";

const SResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goMain = () => navigate(`/`);

  // ✅ keyword 쿼리 파라미터 추출
  const queryParams = new URLSearchParams(location.search);
  const initialKeyword = queryParams.get("keyword") || "";

  const [query, setQuery] = useState(initialKeyword); // 검색어 상태
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ 검색 실행 함수
  const fetchData = async (keyword) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.nocap.kr/api/nocap/search/keyword/${encodeURIComponent(
          keyword
        )}`
      );
      setResults(res.data);
    } catch (error) {
      console.error("뉴스 데이터를 불러오는 데 실패했습니다:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 최초 진입 시 검색
  useEffect(() => {
    if (initialKeyword) {
      fetchData(initialKeyword);
    }
  }, [initialKeyword]);

  // ✅ 엔터로 검색
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      // URL 변경 후 fetch
      navigate(`/search/result?keyword=${encodeURIComponent(query)}`);
      fetchData(query);
    }
  };

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const [activeContent, setActiveContent] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Header>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          onClick={goMain}
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          onClick={toggleSidebar}
        />
      </S.Header>

      <S.Input>
        <img
          src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
          alt="search"
        />
        <input
          type="text"
          placeholder="뉴스 키워드 또는 기사 URL을 입력하세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </S.Input>

      <S.Body>
        <S.List>
          {loading ? (
            <div>로딩 중...</div>
          ) : results.length === 0 ? (
            <div>검색 결과가 없습니다.</div>
          ) : (
            results.map((item, idx) => (
              <S.Comp key={idx}>
                <S.Det>
                  <S.Text>
                    <div id="title">{item.title}</div>
                    <div id="date">{item.date}</div>
                  </S.Text>
                  <S.Hr />
                </S.Det>
                <img src={item.image} alt="news" />
              </S.Comp>
            ))
          )}
        </S.List>
      </S.Body>

      <SSidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </S.Container>
  );
};

export default SResult;
