import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRecent";

const Recent = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <R.Container>
      <R.Header>
        <img
          onClick={goBack}
          id="back"
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div id="title">최근 본 뉴스</div>
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
          alt="search"
        />
      </R.Header>
      <R.Body>
        <R.List>
          <R.Hr>
            <div id="ellipse" />
            <div id="bar" />
          </R.Hr>
          <R.Component>
            <R.Time>
              <img
                src={`${process.env.PUBLIC_URL}/images/time.svg`}
                alt="time"
              />
              <div>2시간 전</div>
            </R.Time>
            <R.Info>
              <R.Title>
                [사회] '초강수' 대출 규제 통했나…서울 아파트값 상승세 둔화
              </R.Title>
              <R.Public>
                <img
                  src={`${process.env.PUBLIC_URL}/images/news.svg`}
                  alt="news"
                />
                <div>SBS</div>
              </R.Public>
            </R.Info>
            <R.Image>
              <img
                src={`${process.env.PUBLIC_URL}/images/news.jpg`}
                alt="news"
              />
            </R.Image>
            <R.Trust>
              <img
                src={`${process.env.PUBLIC_URL}/images/trust_r.svg`}
                alt="trust"
              />
              <div>신뢰도 20% </div>
            </R.Trust>
          </R.Component>
        </R.List>
      </R.Body>
    </R.Container>
  );
};

export default Recent;
