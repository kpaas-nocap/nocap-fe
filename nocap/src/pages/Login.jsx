import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";

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
        <L.Kakao>
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
