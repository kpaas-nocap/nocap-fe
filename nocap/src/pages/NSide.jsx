import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as M from "../styles/StyledNSide";

const sidebarVariants = {
  hidden: { x: "100%" }, // 👉 오른쪽 바깥에서 시작
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    x: "100%", // 👉 다시 오른쪽으로 빠져나감
    transition: { duration: 0.2 },
  },
};

const NSide = ({ isOpen, toggleSidebar, activeContent, setActiveContent }) => {
  const navigate = useNavigate();
  const goPre = () => navigate(`/premium`);
  const inputRef = useRef(null);

  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // ✅ 최근 검색어 로딩
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  // ✅ 엔터로 검색
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      const newSearches = [query, ...recentSearches]
        .filter((item, idx, arr) => arr.indexOf(item) === idx)
        .slice(0, 10); // 중복 제거 후 10개 제한

      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches));

      // 👉 사이드바 닫고 검색 페이지 이동
      navigate(`/news/search?keyword=${encodeURIComponent(query)}`);
      toggleSidebar();
      setQuery(""); // 입력창 초기화
    }
  };

  // ✅ 개별 삭제
  const handleDelete = (index) => {
    const updated = recentSearches.filter((_, i) => i !== index);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <M.SidebarWrapper isOpen={isOpen}>
          <M.Overlay onClick={toggleSidebar} />

          <motion.div
            className="sidebar-motion"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute",
              top: 0,
              right: 0, // ✅ 오른쪽 고정
              width: "100%",
              height: "100vh",
              backgroundColor: "white",
              zIndex: 2,
              boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.15)", // ✅ 그림자 방향도 반대로
              display: "flex",
              flexDirection: "column",
            }}
          >
            <M.Body>
              <M.Header>
                <img
                  id="x"
                  src={`${process.env.PUBLIC_URL}/images/x_b.svg`}
                  alt="x"
                  onClick={toggleSidebar}
                />
              </M.Header>

              <M.Search>
                <M.Input>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
                    alt="search"
                  />
                  <input
                    type="text"
                    placeholder="키워드를 입력하세요."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </M.Input>
                <M.Hr />
              </M.Search>

              <M.Category>
                <M.Title>
                  <div>최근검색어</div>
                </M.Title>
                <M.List>
                  {recentSearches.length === 0 ? (
                    <div style={{ color: "#aaa", padding: "10px" }}>
                      최근 검색 기록이 없습니다.
                    </div>
                  ) : (
                    recentSearches.map((item, index) => (
                      <M.Comp key={index}>
                        <M.Left>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/search.svg`}
                            alt="search"
                          />
                          <div>{item}</div>
                        </M.Left>
                        <M.Right>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/x_b.svg`}
                            alt="x"
                            onClick={() => handleDelete(index)}
                            style={{ cursor: "pointer" }}
                          />
                        </M.Right>
                      </M.Comp>
                    ))
                  )}
                </M.List>
              </M.Category>

              <M.CHr />

              <M.Premium onClick={goPre}>
                <div>프리미엄 구독 하러가기</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Premium>
            </M.Body>
          </motion.div>
        </M.SidebarWrapper>
      )}
    </AnimatePresence>
  );
};

export default NSide;
