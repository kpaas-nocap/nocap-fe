import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPFind";

const PFind = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goSuccess = () => navigate(`/find/success`);
  const goReset = () => navigate(`/find/reset`);
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
      <P.Input>
        <P.Email>
          <div>Email</div>
          <P.InputE>
            <input type="email" placeholder="가입한 이메일을 입력하세요." />
          </P.InputE>
        </P.Email>
      </P.Input>

      <P.Go>
        <P.Signup onClick={goReset}>비밀번호 재설정</P.Signup>
        <P.Login onClick={goSuccess}>비밀번호 찾기</P.Login>
      </P.Go>
    </P.Container>
  );
};

export default PFind;
