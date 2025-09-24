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
      console.log("🔗 카카오 로그인 URL:", res.data);
      window.location.href = res.data;
    } catch (err) {
      console.error("❌ 카카오 로그인 URL 요청 실패:", err);
    }
  };

  // 카카오 로그인 후 redirect_uri에서 code 파라미터 확인
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

      const authHeader = res.headers["authorization"]; // ex: Bearer eyJ...

      if (!authHeader) {
        console.error("❌ Authorization 헤더 없음. 백엔드 응답 확인 필요");
        return;
      }

      const userData = res.data;
      console.log("👤 사용자 정보:", userData);

      if (userData.signed) {
        // 기존 사용자 → 토큰 저장
        localStorage.setItem("access_token", authHeader); // ✅ Bearer 포함해서 저장
        navigate("/");
      } else {
        // 신규 사용자 → 닉네임 입력받기
        const nickname = prompt("닉네임을 입력해주세요:");
        if (!nickname) return;

        console.log("📨 회원가입 요청 시도:", nickname);

        const signupRes = await axios.post(
          `${API_BASE}/auth/kakao/signup`,
          { nickname },
          {
            headers: {
              Authorization: authHeader, // ✅ 이미 Bearer 포함된 상태
            },
          }
        );

        const newAuthHeader = signupRes.headers["authorization"];
        if (newAuthHeader) {
          localStorage.setItem("access_token", newAuthHeader); // ✅ 다시 저장
        }

        navigate("/");
      }
    } catch (err) {
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
