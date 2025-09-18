import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import axios from "axios";
const API_BASE = "http://13.209.98.128"; // ⚠️ 배포 주소로 바꾸세요!

const Login = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goSignup = () => {
    navigate(`/signup`);
  };

  const goLocal = () => {
    navigate(`/login/local`);
  };

  // 1️⃣ 카카오 로그인 URL 가져오기 → 이동
  const handleKakaoLogin = async () => {
    try {
      const res = await axios.get(`${API_BASE}/auth/kakao/login`);
      window.location.href = res.data; // 카카오 로그인 페이지로 리다이렉트
    } catch (err) {
      console.error("카카오 로그인 URL 요청 실패:", err);
    }
  };

  // 2️⃣ redirect_uri에서 code 파라미터 읽고 백엔드 로그인 처리
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      handleKakaoCallback(code);
    }
  }, []);

  const handleKakaoCallback = async (code) => {
    try {
      const res = await axios.get(`${API_BASE}/auth/login/kakao`, {
        params: { code },
      });

      const authHeader = res.headers["authorization"]; // 액세스 토큰 or Pre-Register 토큰
      const userData = res.data;

      if (userData.signed) {
        // ✅ Bearer 제거 후 저장
        localStorage.setItem(
          "access_token",
          authHeader?.replace("Bearer ", "")
        );
        navigate("/");
      } else {
        // 🆕 신규 사용자 → 닉네임 입력받고 회원가입 API 호출
        const nickname = prompt("닉네임을 입력해주세요:");
        if (!nickname) return;

        const signupRes = await axios.post(
          `${API_BASE}/auth/kakao/signup`,
          { nickname },
          { headers: { Authorization: `Bearer ${authHeader}` } }
        );

        localStorage.setItem(
          "access_token",
          signupRes.headers["authorization"]?.replace("Bearer ", "")
        );
        navigate("/");
      }
    } catch (err) {
      console.error("카카오 로그인 처리 실패:", err);
    }
  };

  return (
    <L.Container>
      <L.Header>
        <L.Back onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
        </L.Back>
      </L.Header>
      <L.Box>
        <L.Logo>
          <img src={`${process.env.PUBLIC_URL}/images/logo_b.svg`} alt="logo" />
        </L.Logo>
        <L.Detail>
          <div>
            간편로그인 후 <br />
            이용 가능합니다
          </div>
        </L.Detail>
        <L.Kakao onClick={handleKakaoLogin}>
          <img src={`${process.env.PUBLIC_URL}/images/kakao.svg`} alt="kakao" />
          <div>카카오 로그인</div>
        </L.Kakao>
        <L.General onClick={goLocal}>
          <div>일반 로그인</div>
        </L.General>
        <L.Signup onClick={goSignup}>
          <div>회원가입하기</div>
        </L.Signup>
      </L.Box>
    </L.Container>
  );
};

export default Login;
