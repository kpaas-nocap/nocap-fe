import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLocal";
import axios from "axios";

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

  // ✅ 로그인 함수
  const handleLogin = async () => {
    const loginData = {
      userId: email,
      password: password,
    };

    console.log("📤 로그인 시도:", loginData);

    try {
      const response = await axios.post(
        "http://13.209.98.128/auth/form/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ 응답 출력
      console.log("✅ 로그인 성공!");
      console.log("📥 서버 응답:", response.data);
      console.log("🔐 Access Token:", response.headers["authorization"]);

      // ✅ 토큰 저장
      const token = response.headers["authorization"];
      if (token) {
        localStorage.setItem("accessToken", token);
      }

      // ✅ 원하는 페이지로 이동 (예: 홈 또는 마이페이지)
      navigate("/");
    } catch (error) {
      console.error("❌ 로그인 실패:", error);
      if (error.response) {
        console.error("📛 서버 응답 오류:", error.response.data);
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        alert("서버에 문제가 발생했습니다.");
      }
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
        <L.Title>
          <div>로그인</div>
        </L.Title>
      </L.Header>
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
          <L.SCheckBox
            checked={isSChecked}
            onClick={() => setIsSChecked(!isSChecked)}
          >
            {isSChecked && <L.CheckIcon>✔</L.CheckIcon>}
          </L.SCheckBox>
          <L.Save>아이디 저장</L.Save>
          <L.KCheckBox
            checked={isKChecked}
            onClick={() => setIsKChecked(!isKChecked)}
          >
            {isKChecked && <L.CheckIcon>✔</L.CheckIcon>}
          </L.KCheckBox>
          <L.Keep>로그인 유지하기</L.Keep>
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
    </L.Container>
  );
};

export default LocalLogin;
