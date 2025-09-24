import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import axios from "axios";
const API_BASE = "https://www.nocap.kr";

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

  const handleKakaoLogin = async () => {
    try {
      const res = await axios.get(`${API_BASE}/auth/kakao/login`);
      console.log("🔗 카카오 로그인 URL:", res.data); // ← 이거 찍어보면 어디로 가는지 나옴
      window.location.href = res.data;
    } catch (err) {
      console.error("❌ 카카오 로그인 URL 요청 실패:", err);
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

      // ✅ 1. 응답 로그 찍어보기
      console.log("🔐 Kakao login response:", res);
      const authHeader = res.headers["authorization"]; // 토큰이 여기에 있어야 함

      // ✅ 2. 헤더가 있는지 먼저 체크
      if (!authHeader) {
        console.error("❌ Authorization 헤더 없음. 백엔드 응답 확인 필요");
        return;
      }

      const userData = res.data;
      console.log("👤 사용자 정보:", userData);

      if (userData.signed) {
        // 기존 사용자 → 토큰 저장 후 메인으로
        localStorage.setItem("access_token", authHeader.replace("Bearer ", ""));
        navigate("/");
      } else {
        // 🆕 신규 사용자 → 닉네임 입력받기
        const nickname = prompt("닉네임을 입력해주세요:");
        if (!nickname) return;

        // ✅ 3. 회원가입 API 호출 전 로그 찍기
        console.log("📨 회원가입 요청 시도: ", nickname);
        console.log("📨 Authorization 헤더:", authHeader);

        const signupRes = await axios.post(
          `${API_BASE}/auth/kakao/signup`,
          { nickname },
          {
            headers: {
              Authorization: `Bearer ${authHeader}`, // ✅ Bearer 붙여야 함
            },
          }
        );

        // ✅ 4. 회원가입 응답 확인
        console.log("📨 회원가입 응답:", signupRes);

        localStorage.setItem(
          "access_token",
          signupRes.headers["authorization"]?.replace("Bearer ", "")
        );
        navigate("/");
      }
    } catch (err) {
      // ✅ 5. 오류가 있다면 응답 전체 확인
      console.error("❌ 카카오 로그인 처리 실패:", err.response || err);
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
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
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
