import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPSuccess";

const PSuccess = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goLogin = () => navigate(`/login/local`);
  return (
    <P.Container>
      <P.Header>
        <P.Back onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
        </P.Back>
        <P.Title>
          <div>비밀번호 찾기</div>
        </P.Title>
      </P.Header>

      <P.Content>가입한 이메일로 비밀번호가 전송되었습니다.</P.Content>

      <P.Go onClick={goLogin}>로그인하기</P.Go>
    </P.Container>
  );
};

export default PSuccess;
