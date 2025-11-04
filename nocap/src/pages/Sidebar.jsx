import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as M from "../styles/StyledSidebar";
import axios from "axios";

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
  const navigate = useNavigate();

  const [user, setUser] = useState(null); // ✅ 유저 정보 저장
  const [loading, setLoading] = useState(true);

  // ✅ 유저 정보 불러오기 함수
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const res = await axios.get("https://www.nocap.kr/api/nocap/user/me", {
        headers: {
          Authorization: `${token}`, // ✅ 토큰 추가
        },
      });

      setUser(res.data); // res.data = { id, userId, username, role }
    } catch (err) {
      console.error("유저 정보 불러오기 실패:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) fetchUser(); // 사이드바 열릴 때마다 유저 정보 새로 가져오기
  }, [isOpen]);

  // 로그인 클릭 시
  const goLogin = () => {
    navigate("/login");
    toggleSidebar(); // 사이드바도 닫기
  };
  const goMy = () => {
    if (!user) {
      // ✅ 로그인 안 돼 있을 때 경고 or 로그인 페이지로 이동
      alert("로그인 후 이용 가능합니다!");
      navigate("/login");
      toggleSidebar();
      return;
    }
    navigate(`/my`);
    toggleSidebar();
  };
  const goNews = () => {
    navigate(`/news`);
    toggleSidebar();
  };
  const goAnal = () => navigate(`/analysis`);

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
              overflowY: "auto", // ✅ 이 줄 추가
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

            {/* ✅ 로그인/마이페이지 분기 */}
            {loading ? null : user ? (
              <M.Hi>
                <div>{user.username} 님</div>
              </M.Hi>
            ) : (
              <M.Hi onClick={goLogin}>
                <div>로그인 해주세요</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/more_b.svg`}
                  alt="more"
                />
              </M.Hi>
            )}

            <M.Content>
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

export default Sidebar;
