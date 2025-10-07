import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSuccess";

const Success = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  };

  const goLogin = () => {
    navigate(`/login/local`);
  };
  const goMain = () => navigate(`/`);

  return (
    <S.Container>
      <S.DesktopOnly>
        <S.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <S.Menu>
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
          </S.Menu>
        </S.Head>
      </S.DesktopOnly>

      <S.Body>
        <S.Detail>
          <img src={`${process.env.PUBLIC_URL}/images/signup.png`} alt="logo" />
          <div>가입이 완료되었습니다.</div>
        </S.Detail>

        <S.MobileOnly>
          <S.Button>
            <S.Login onClick={goLogin}>
              <div>로그인하기</div>
            </S.Login>
            <S.Home onClick={goHome}>
              <div>홈 바로가기</div>
            </S.Home>
          </S.Button>
        </S.MobileOnly>

        <S.DesktopOnly>
          <S.Go onClick={goLogin}>로그인하기</S.Go>
        </S.DesktopOnly>
      </S.Body>
    </S.Container>
  );
};

export default Success;
