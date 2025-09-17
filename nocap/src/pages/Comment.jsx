import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/StyledComment";

const Comment = () => {
  const navigate = useNavigate();
  const [activeSort, setActiveSort] = useState("최신순"); // 초기값

  const goBack = () => navigate(-1);

  return (
    <C.Container>
      <C.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>내댓글</div>
      </C.Header>

      <C.Sort>
        <C.SDetail>
          {["최신순", "공감순", "답글순"].map((label) => (
            <div
              key={label}
              onClick={() => setActiveSort(label)}
              style={{
                color: activeSort === label ? "#000000" : "#B2B2B2", // 클릭된 항목만 검정색
                cursor: "pointer",
              }}
            >
              {label}
            </div>
          ))}
        </C.SDetail>
        <C.Hr />
      </C.Sort>

      <C.List>
        <C.Component>
          <C.Title>댓글내용</C.Title>
          <C.News>
            <img
              src={`${process.env.PUBLIC_URL}/images/news.jpg`}
              alt="thumbnail"
            />
            <C.NTitle>
              <div id="title">
                '초강수' 대출 규제 통했나…서울 아파트값 상승세 둔화
              </div>
              <div id="cc">JTBC뉴스</div>
            </C.NTitle>
          </C.News>
          <C.Detail>
            <div>50분전</div>
            <div>좋아요 2</div>
            <div>답글 3</div>
          </C.Detail>
          <C.Hr />
        </C.Component>
      </C.List>
    </C.Container>
  );
};

export default Comment;
