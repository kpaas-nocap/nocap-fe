import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../styles/StyledBM";

const Bookmark = () => {
  const [sortOrder, setSortOrder] = useState("오래된 순"); // 초기값

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "오래된 순" ? "최신순" : "오래된 순"));
  };
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
      <B.Cate>
        <B.Num>
          <div>전체 4</div>
        </B.Num>
        <B.Sort onClick={toggleSort}>
          <img src={`${process.env.PUBLIC_URL}/images/sort.svg`} alt="sort" />
          <div>{sortOrder}</div>
        </B.Sort>
      </B.Cate>
      <B.Body>
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
              </B.Icons>
            </B.Detail>
          </B.Component>
        </B.List>
      </B.Body>
    </B.Container>
  );
};

export default Bookmark;
