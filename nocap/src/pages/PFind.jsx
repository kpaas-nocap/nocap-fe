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
  const goMain = () => navigate(`/`);
  const goLogin = () => navigate(`/login/local`);

  return (
    <P.Container>
      <P.MobileOnly>
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
      </P.MobileOnly>

      <P.DesktopOnly>
        <P.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <P.Menu>
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
          </P.Menu>
        </P.Head>
        <P.Tit>비밀번호 찾기</P.Tit>
      </P.DesktopOnly>

      <P.Body>
        <P.Frame>
          <P.Input>
            <P.Email>
              <div>Email</div>
              <P.InputE>
                <input type="email" placeholder="가입한 이메일을 입력하세요." />
              </P.InputE>
            </P.Email>
          </P.Input>

          <P.DesktopOnly>
            <P.Go>
              <P.Signup onClick={goReset}>비밀번호 재설정</P.Signup>
              <P.Login onClick={goSuccess}>비밀번호 찾기</P.Login>
            </P.Go>
          </P.DesktopOnly>
        </P.Frame>
      </P.Body>

      <P.MobileOnlyBut>
        <P.Go>
          <P.Signup onClick={goReset}>비밀번호 재설정</P.Signup>
          <P.Login onClick={goSuccess}>비밀번호 찾기</P.Login>
        </P.Go>
      </P.MobileOnlyBut>
    </P.Container>
  );
};

export default PFind;
