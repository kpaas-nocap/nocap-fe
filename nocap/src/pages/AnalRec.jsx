import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/StyledARec";

const AnalRec = () => {
  const [sortOrder, setSortOrder] = useState("오래된 순"); // 초기값

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "오래된 순" ? "최신순" : "오래된 순"));
  };
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

      <A.Detail>
        <A.Num>
          <div>전체 4</div>
        </A.Num>
        <A.Sort onClick={toggleSort}>
          <img src={`${process.env.PUBLIC_URL}/images/sort.svg`} alt="sort" />
          <div>{sortOrder}</div>
        </A.Sort>
      </A.Detail>

      <A.Body>
        <A.List>
          <A.Component>
            <A.Thumb></A.Thumb>
            <A.Title>
              "이준석 제명" 청원 60만 넘겨 마감‥ 역대 청원 2위 기록
            </A.Title>
            <A.Date>
              <img
                src={`${process.env.PUBLIC_URL}/images/date.svg`}
                alt="date"
              />
              <div>2025/07/16</div>
            </A.Date>
          </A.Component>
        </A.List>
      </A.Body>
    </A.Container>
  );
};

export default AnalRec;
