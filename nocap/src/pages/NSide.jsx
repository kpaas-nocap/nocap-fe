import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as M from "../styles/StyledNSide";

const sidebarVariants = {
  hidden: { x: "-100%" }, // 왼쪽에서 시작
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.2 },
  },
};

const Sidebar = ({
  isOpen,
  toggleSidebar,
  activeContent,
  setActiveContent,
}) => {
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
              left: 0, // ✅ 왼쪽 고정
              width: "100%",
              height: "100vh",
              backgroundColor: "white",
              zIndex: 2,
              boxShadow: "2px 0 8px rgba(0, 0, 0, 0.15)", // ✅ 그림자 반대 방향
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
              <M.Comp onClick={goNews}>
                <div>뉴스</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Comp>
              <M.Comp>
                <div>기사분석</div>
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

export default Sidebar;
