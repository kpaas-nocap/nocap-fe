import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSetting";

const Setting = () => {
  return (
    <S.Container>
      <S.Header>
        <div id="title">설정</div>
        <img src={`${process.env.PUBLIC_URL}/images/x_b.svg`} alt="x" />
      </S.Header>

      <S.Body>
        <S.List>
          <S.Comp>
            <div>프로필 수정</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          <S.Comp>
            <div>구매내역</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          <S.Comp>
            <div>버전 정보</div>
            <div id="new">1.1 최신</div>
          </S.Comp>
          <S.Comp>
            <div>문의하기</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          <S.Comp>
            <div>서비스 탈퇴</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
        </S.List>

        <S.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_big.png`}
            alt="logo"
          />
        </S.Logo>
      </S.Body>
    </S.Container>
  );
};

export default Setting;
