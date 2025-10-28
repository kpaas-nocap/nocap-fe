import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLocal";
import axios from "axios";
const API_BASE = "https://www.nocap.kr";

const LocalLogin = () => {
  const [isSChecked, setIsSChecked] = useState(false);
  const [isKChecked, setIsKChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ 이메일, 비밀번호 상태 추가
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goSignup = () => {
    navigate(`/signup`);
  };
  const goFind = () => navigate(`/find`);
  const goMain = () => navigate(`/`);
  const goLogin = () => navigate(`/login/local`);

  // ✅ 1️⃣ 컴포넌트가 마운트될 때 localStorage 에 저장된 이메일 불러오기
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setIsSChecked(true); // 체크박스도 자동으로 체크되게
    }
  }, []);

  // ✅ 2️⃣ 로그인 함수 수정
  const handleLogin = async () => {
    const loginData = { userId: email, password: password };

    console.log("📤 로그인 시도:", loginData);

    try {
      const response = await axios.post(
        "https://www.nocap.kr/auth/form/login",
        loginData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ 로그인 성공!", response.data);

      const token = response.headers["authorization"];
      if (token) localStorage.setItem("accessToken", token);

      // ✅ 아이디 저장 처리
      if (isSChecked) {
        localStorage.setItem("savedEmail", email); // 이메일 저장
      } else {
        localStorage.removeItem("savedEmail"); // 저장 해제 시 삭제
      }

      navigate("/");
    } catch (error) {
      console.error("❌ 로그인 실패:", error);
      if (error.response) {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        alert("서버에 문제가 발생했습니다.");
      }
    }
  };

  // ✅ 아이디 저장 토글
  const toggleSaveId = () => setIsSChecked((prev) => !prev);

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
        localStorage.setItem("accessToken", authHeader);

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
          localStorage.setItem("accessToken", newAuthHeader);
        }

        navigate("/");
      }
    } catch (err) {
      console.error("❌ 카카오 로그인 처리 실패:", err.response || err);
    }
  };

  return (
    <L.Container>
      <L.MobileOnly>
        <L.Header>
          <L.Back onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
              alt="back"
            />
          </L.Back>
          <L.Title>
            <div>로그인</div>
          </L.Title>
        </L.Header>
      </L.MobileOnly>

      <L.DesktopOnly>
        <L.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <L.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기">
              뉴스
            </div>
            <div id="tag" onClick={goLogin}>
              로그인/회원가입
              <div id="circle" />
            </div>
          </L.Menu>
        </L.Head>
        <L.Title>
          <div>로그인</div>
        </L.Title>
      </L.DesktopOnly>

      <L.Body>
        <L.Frame>
          <L.Input>
            <L.Email>
              <div>Email</div>
              <L.InputE>
                <input
                  type="email"
                  placeholder="이메일을 입력하세요."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </L.InputE>
            </L.Email>
            <L.PW>
              <div>비밀번호</div>
              <L.InputP>
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="비밀번호를 입력하세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/${
                    showPassword ? "eye_c.svg" : "eye_o.svg"
                  }`}
                  alt={showPassword ? "close" : "open"}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                />
              </L.InputP>
            </L.PW>
            <L.Check>
              <L.SCheckBox checked={isSChecked} onClick={toggleSaveId}>
                {isSChecked && <L.CheckIcon>✔</L.CheckIcon>}
              </L.SCheckBox>
              <L.Save>아이디 저장</L.Save>

              {/* <L.KCheckBox
                checked={isKChecked}
                onClick={() => setIsKChecked(!isKChecked)}
              >
                {isKChecked && <L.CheckIcon>✔</L.CheckIcon>}
              </L.KCheckBox>
              <L.Keep>로그인 유지하기</L.Keep> */}
            </L.Check>
          </L.Input>
          <L.Find onClick={goFind}>비밀번호 찾기</L.Find>

          <L.Go>
            <L.Signup onClick={goSignup}>회원가입</L.Signup>

            <L.Login
              onClick={handleLogin}
              style={{
                backgroundColor:
                  email.trim() && password.trim() ? "#213CE9" : "#D9D9D9",
                cursor: email.trim() && password.trim() ? "pointer" : "default",
              }}
            >
              로그인
            </L.Login>
          </L.Go>

          <L.DesktopOnly>
            <L.Kakao onClick={handleKakaoLogin}>
              <img
                src={`${process.env.PUBLIC_URL}/images/kakao.svg`}
                alt="kakao"
              />
              <div>카카오 로그인</div>
            </L.Kakao>
          </L.DesktopOnly>
        </L.Frame>
      </L.Body>
    </L.Container>
  );
};

export default LocalLogin;
