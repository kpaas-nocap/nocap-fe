import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLocal";

const LocalLogin = () => {
  const [isSChecked, setIsSChecked] = useState(false);
  const [isKChecked, setIsKChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goSignup = () => {
    navigate(`/signup`);
  };
  const goFind = () => navigate(`/find`);

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
            <input type="email" placeholder="이메일을 입력하세요." />
          </L.InputE>
        </L.Email>
        <L.PW>
          <div>비밀번호</div>
          <L.InputP>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="비밀번호를 입력하세요."
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
        <L.Login>로그인</L.Login>
      </L.Go>
    </L.Container>
  );
};

export default LocalLogin;
