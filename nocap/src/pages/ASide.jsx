import React from "react";
import { useNavigate } from "react-router-dom";
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

const ASide = ({ isOpen, toggleSidebar, activeContent, setActiveContent }) => {
  const navigate = useNavigate();

  // 로그인 클릭 시
  const goLogin = () => {
    navigate("/login");
    toggleSidebar(); // 사이드바도 닫기
  };
  const goMy = () => {
    navigate(`/my`);
    toggleSidebar();
  };
  const goNews = () => {
    navigate(`/news`);
    toggleSidebar();
  };
  const goHome = () => navigate(`/`);

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
              width: "100%",
              height: "100vh",
              backgroundColor: "white",
              zIndex: 2,
              boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.15)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <M.Body>
              <M.Header>
                <img
                  id="logo"
                  src={`${process.env.PUBLIC_URL}/images/logo.png`}
                  alt="logo"
                />
                <img
                  id="x"
                  src={`${process.env.PUBLIC_URL}/images/x_b.svg`}
                  alt="x"
                  onClick={toggleSidebar}
                />
              </M.Header>
              <M.Hr />
            </M.Body>

            <M.Hi onClick={goLogin}>
              <div>로그인 해주세요</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                alt="more"
              />
            </M.Hi>

            <M.Content>
              <M.Comp onClick={goHome}>
                <div>홈</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Comp>
              <M.Comp onClick={goNews}>
                <div>뉴스</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Comp>
              <M.Comp onClick={goMy}>
                <div>마이페이지</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Comp>
            </M.Content>
          </motion.div>
        </M.SidebarWrapper>
      )}
    </AnimatePresence>
  );
};

export default ASide;
