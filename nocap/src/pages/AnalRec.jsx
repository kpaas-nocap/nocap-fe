import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/StyledARec";

const AnalRec = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <A.Container>
      <A.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>분석기록</div>
      </A.Header>
      <A.SearchBar>
        <input type="text" placeholder="찾고 싶은 기사 제목을 입력하세요" />
        <img
          src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
          alt="search"
        />
      </A.SearchBar>
      <A.Body>
        <A.Num>전체 4</A.Num>
        <A.Category>
          <A.Button>
            <div id="all">전체</div>
            <div id="btn">버튼2</div>
          </A.Button>
          <A.Sort>
            <img src={`${process.env.PUBLIC_URL}/images/sort.svg`} alt="sort" />
            <div>최신순</div>
          </A.Sort>
        </A.Category>
        <A.Bar>
          <img
            src={`${process.env.PUBLIC_URL}/images/fact_bar.svg`}
            alt="bar"
          />
          <A.Circle />
        </A.Bar>
        <A.List>
          <A.Component>
            <img src={`${process.env.PUBLIC_URL}/images/news.jpg`} alt="news" />
            <div>진짜 장마 온다… 내일 오후부터 토요일까지 전국에 많은 비</div>
            <A.Detail>
              <A.Trust>
                <img
                  src={`${process.env.PUBLIC_URL}/images/trust_r.svg`}
                  alt="trust"
                />
                <div>유사도 20%</div>
              </A.Trust>
              <A.Date>
                <img
                  src={`${process.env.PUBLIC_URL}/images/date.svg`}
                  alt="date"
                />
                <div>2025/07/06</div>
              </A.Date>
            </A.Detail>
          </A.Component>
        </A.List>
      </A.Body>
    </A.Container>
  );
};

export default AnalRec;
