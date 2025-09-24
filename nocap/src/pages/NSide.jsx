import React, { useState } from "react";
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
  // ✅ 선택된 카테고리 상태 (초기값: "정치")
  const [selectedCategory, setSelectedCategory] = useState("정치");

  // ✅ 카테고리 배열
  const categories = [
    "정치",
    "경제",
    "사회",
    "생활/문화",
    "IT/과학",
    "세계",
    "기타",
  ];

  // ✅ 카테고리 선택 함수
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
                  <input type="text" placeholder="결과 내 재검색" />
                </M.Input>
                <M.Hr />
              </M.Search>

              <M.Category>
                <M.Title>
                  <div>카테고리</div>
                  <hr />
                </M.Title>
                <M.List>
                  {categories.map((category) => (
                    <M.Comp
                      key={category}
                      onClick={() => handleSelectCategory(category)}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/${
                          selectedCategory === category
                            ? "check_b.svg"
                            : "check.svg"
                        }`}
                        alt="check"
                      />
                      <div>{category}</div>
                    </M.Comp>
                  ))}
                </M.List>
              </M.Category>

              <M.Premium onClick={goPre}>
                <div>프리미엄 구독 하러가기</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Premium>

              <M.Button>
                <M.Reset>초기화</M.Reset>
                <M.Apply>적용</M.Apply>
              </M.Button>
            </M.Body>
          </motion.div>
        </M.SidebarWrapper>
      )}
    </AnimatePresence>
  );
};

export default NSide;
