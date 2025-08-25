import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../styles/StyledBM";

const Bookmark = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <B.Container>
      <B.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>북마크</div>
      </B.Header>
      <B.SearchBar>
        <input type="text" placeholder="찾고 싶은 기사 제목을 입력하세요" />
        <img
          src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
          alt="search"
        />
      </B.SearchBar>
      <B.Body>
        <B.Num>전체 4</B.Num>
        <B.Category>
          <B.Button>
            <div id="all">전체</div>
            <div id="btn">버튼2</div>
          </B.Button>
          <B.Sort>
            <img src={`${process.env.PUBLIC_URL}/images/sort.svg`} alt="sort" />
            <div>최신순</div>
          </B.Sort>
        </B.Category>
        <B.Bar>
          <img
            src={`${process.env.PUBLIC_URL}/images/fact_bar.svg`}
            alt="bar"
          />
          <B.Circle />
        </B.Bar>
        <B.List>
          <B.Component>
            <B.Img>
              <img
                src={`${process.env.PUBLIC_URL}/images/news.jpg`}
                alt="news"
              />
            </B.Img>
            <B.Detail>
              <B.Icon>
                <div>사회</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/bookmark_b.svg`}
                  alt="bookmark"
                />
              </B.Icon>
              <B.Title>
                진짜 장마 온다… 내일 오후부터 토요일까지 전국에 많은 비
              </B.Title>
              <B.Icons>
                <img
                  id="date"
                  src={`${process.env.PUBLIC_URL}/images/date.svg`}
                  alt="date"
                />
                <div id="dt">2025/07/06</div>
                <img
                  id="trust"
                  src={`${process.env.PUBLIC_URL}/images/trust_r.svg`}
                  alt="trust"
                />
                <div id="tt">유사도 20%</div>
              </B.Icons>
            </B.Detail>
          </B.Component>
        </B.List>
      </B.Body>
    </B.Container>
  );
};

export default Bookmark;
