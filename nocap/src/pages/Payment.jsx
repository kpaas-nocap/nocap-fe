import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPayment";
import axios from "axios";
import Logout from "./Logout";

const Payment = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goIntro = () => navigate(`/introduce`);
  const goNews = () => navigate(`/news`);
  const goEdit = () => navigate(`/my/edit`);
  const goInquiry = () => navigate(`/my/inquiry`);
  const goPre = () => navigate(`/premium`);
  const goMy = () => navigate(`/my`);

  // ✅ 사용자 정보 상태값
  const [username, setUsername] = useState("");
  const [point, setPoint] = useState(0);
  const [role, setRole] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ 유저 정보 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("토큰이 없습니다. 로그인 필요");
          return;
        }

        const res = await axios.get("https://www.nocap.kr/api/nocap/user/me", {
          headers: {
            Authorization: `${token}`, // ✅ 토큰 헤더에 추가
          },
        });

        const data = res.data;
        setUsername(data.username);
        setPoint(data.point);
        setRole(data.role); // ROLE_USER or ROLE_PREMIUM
      } catch (err) {
        console.error("❌ 사용자 정보 불러오기 실패:", err);
      }
    };

    fetchUserData();
  }, []);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("로그아웃 시도: 토큰 없음");
        navigate("/login");
        return;
      }

      // ✅ 백엔드 로그아웃 API 호출
      await axios.post("https://www.nocap.kr/auth/logout", null, {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log("백엔드 로그아웃 완료");
    } catch (err) {
      console.error("로그아웃 API 호출 실패:", err);
      // 실패해도 토큰은 지워주고 로그인 페이지로 이동
    } finally {
      // ✅ 토큰 삭제 + 로그인 페이지 이동
      localStorage.removeItem("accessToken");
      navigate("/");
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    console.log("취소 버튼 눌림!");
    setIsModalOpen(false);
  };

  return (
    <P.Container>
      <P.MobileOnly>
        <P.Header>
          <img
            onClick={goBack}
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
          <div>구매내역</div>
        </P.Header>
      </P.MobileOnly>

      <P.DesktopOnly>
        <P.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <P.Menu>
            <div id="tag" onClick={goMain} style={{ cursor: "pointer" }}>
              홈
            </div>
            <div id="tag" onClick={goIntro} style={{ cursor: "pointer" }}>
              NOCAP 소개
            </div>
            <div id="tag" onClick={goNews} style={{ cursor: "pointer" }}>
              뉴스
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goMy}>
              마이페이지
              <div id="circle" />
            </div>
          </P.Menu>
        </P.Head>
      </P.DesktopOnly>

      <P.DesktopOnly>
        <P.Nav>
          <P.NComp onClick={goPre} style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/premium_n.png`}
              alt="point"
            />
            <div>프리미엄</div>
          </P.NComp>
          <P.NComp onClick={goEdit} style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/edit_n.png`}
              alt="point"
            />
            <div>프로필 수정</div>
          </P.NComp>
          <P.NComp style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/buy_c.png`}
              alt="point"
            />
            <div>구매내역</div>
          </P.NComp>
          <P.NComp onClick={goInquiry} style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/inquiry_n.png`}
              alt="point"
            />
            <div>문의하기</div>
          </P.NComp>
        </P.Nav>
      </P.DesktopOnly>
      <P.Body>
        <P.MobileOnly>
          <P.Role>
            {role === "ROLE_PREMIUM" ? "프리미엄 회원" : "일반 회원"}
          </P.Role>
          <P.Hr />
          <P.Content>구매 내역이 없습니다.</P.Content>
          <P.Btn onClick={goPre} style={{ cursor: "pointer" }}>
            프리미엄 구독 하러가기
          </P.Btn>
        </P.MobileOnly>

        <P.DesktopOnly>
          <P.Up>
            <P.Prof>
              <div id="name">{username ? `${username}님` : "로딩 중..."}</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.png`}
                alt="profile"
              />
              <div
                id="logout"
                onClick={handleLogoutClick}
                style={{ cursor: "pointer" }}
              >
                로그아웃
              </div>
              {isModalOpen && (
                <Logout onConfirm={handleConfirm} onCancel={handleCancel} />
              )}
            </P.Prof>

            <P.Point>
              <P.Left>
                <img
                  src={`${process.env.PUBLIC_URL}/images/left.svg`}
                  alt="left"
                />
                <div id="detail">남은 분석 횟수</div>
                <div id="point">{point}</div> {/* ✅ point */}
              </P.Left>
              <P.Hr1 />
              <P.Rank onClick={goPre}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/diamond.png`}
                  alt="diamond"
                />
                <div>
                  {role === "ROLE_PREMIUM" ? "Premium" : "Free"}{" "}
                  {/* ✅ role에 따라 표시 */}
                </div>
              </P.Rank>
            </P.Point>
          </P.Up>
          <P.Content>구매 내역이 없습니다.</P.Content>
          <P.Btn onClick={goPre} style={{ cursor: "pointer" }}>
            프리미엄 구독 하러가기
          </P.Btn>
        </P.DesktopOnly>
      </P.Body>
    </P.Container>
  );
};

export default Payment;
