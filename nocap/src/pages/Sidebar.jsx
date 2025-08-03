import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as M from "../styles/StyledSidebar";

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.2 },
  },
};

const Sidebar = ({
  isOpen,
  toggleSidebar,
  activeContent,
  setActiveContent,
}) => {
  const handleMenuClick = (content) => {
    setActiveContent(content);
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
              right: 0,
              width: "80%",
              height: "100vh",
              backgroundColor: "white",
              zIndex: 2,
              boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.15)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <M.Header>
              <img
                id="x"
                src={`${process.env.PUBLIC_URL}/images/x_w.svg`}
                alt="x"
                onClick={toggleSidebar}
              />
              <M.Hi>
                <div>로그인 해주세요</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more.svg`}
                  alt="more"
                />
              </M.Hi>
            </M.Header>

            {/* ✅ 스크롤 가능한 콘텐츠 영역 */}
            <M.ScrollableContent>
              <M.Analyze>
                <M.ATitle>기사분석</M.ATitle>
                <M.AList>
                  <div>주요뉴스</div>
                  <div>속보</div>
                  <div>정치</div>
                  <div>경제</div>
                  <div>사회</div>
                  <div>세계</div>
                  <div>연예</div>
                  <div>스포츠</div>
                  <div>IT</div>
                </M.AList>
              </M.Analyze>
              <M.Hr />
              <M.News>
                <M.NTitle>뉴스</M.NTitle>
                <M.NList>
                  <div>주요뉴스</div>
                  <div>속보</div>
                  <div>정치</div>
                  <div>경제</div>
                  <div>사회</div>
                  <div>세계</div>
                  <div>연예</div>
                  <div>스포츠</div>
                  <div>IT</div>
                </M.NList>
              </M.News>
            </M.ScrollableContent>

            {/* <M.Analyze>
              <M.ATitle>기사분석</M.ATitle>
              <M.AList>
                <div>주요뉴스</div>
                <div>속보</div>
                <div>정치</div>
                <div>경제</div>
                <div>사회</div>
                <div>세계</div>
                <div>연예</div>
                <div>스포츠</div>
                <div>IT</div>
              </M.AList>
            </M.Analyze>
            <M.Hr />
            <M.News>
              <M.NTitle>뉴스</M.NTitle>
              <M.NList>
                <div>주요뉴스</div>
                <div>속보</div>
                <div>정치</div>
                <div>경제</div>
                <div>사회</div>
                <div>세계</div>
                <div>연예</div>
                <div>스포츠</div>
                <div>IT</div>
              </M.NList>
            </M.News> */}
          </motion.div>
        </M.SidebarWrapper>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
