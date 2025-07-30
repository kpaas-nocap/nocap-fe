import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSuccess";

const Success = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  };

  const goLogin = () => {
    navigate(`/login`);
  };

  return (
    <S.Container>
      <S.Detail>
        <img src={`${process.env.PUBLIC_URL}/images/logo_b.svg`} alt="logo" />
        <div>가입이 완료되었습니다.</div>
      </S.Detail>
      <S.Button>
        <S.Login onClick={goLogin}>
          <div>로그인하기</div>
        </S.Login>
        <S.Home onClick={goHome}>
          <div>홈 바로가기</div>
        </S.Home>
      </S.Button>
    </S.Container>
  );
};

export default Success;
