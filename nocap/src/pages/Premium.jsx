import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPremium";

const Premium = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <P.Container>
      <P.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>플랜 업그레이드</div>
      </P.Header>

      <P.Body>
        <P.Free>
          <P.Title>🆓 Free</P.Title>
          <P.Price>
            <div id="num">0</div>
            <div id="cost">원/ 일</div>
          </P.Price>
          <P.Status>나의 현재 플랜</P.Status>
          <P.Detail1>타인이 분석한 기사 열람 가능</P.Detail1>
          <P.Detail1>최신 분석 기사와 인기 분석 기사 제공</P.Detail1>
          <P.Detail1>분석된 기사에 댓글 1개 작성 가능</P.Detail1>
          <P.Detail1>느린 속도의 제한적 기사 분석</P.Detail1>
          <P.Detail1>유사 주제 기사 목록 표시</P.Detail1>
          <P.Detail1>원본 기사와 유사도 표시</P.Detail1>
        </P.Free>

        <P.Pro>
          <P.Title>💎 Pro</P.Title>
          <P.Price>
            <div id="num">?000</div>
            <div id="cost">원/ 일</div>
          </P.Price>
          <P.Use>Pro 이용하기 </P.Use>
          <P.Detail1>타인이 분석한 기사 열람 가능</P.Detail1>
          <P.Detail1>최신 분석 기사와 인기 분석 기사 제공</P.Detail1>
          <P.Detail2>팩트체크 버튼으로 즉시 기사 분석</P.Detail2>
          <P.Detail2>각 기사 별 원본 기사와의 신뢰도 표시</P.Detail2>
          <P.Detail1>유사 주제 기사 목록 표시</P.Detail1>
          <P.Detail1>원본 기사와 유사도 표시</P.Detail1>
          <P.Detail2>
            유사 기사 각각에 대해 원본 기사와 비교 분석 제공
          </P.Detail2>
        </P.Pro>
      </P.Body>
    </P.Container>
  );
};

export default Premium;
