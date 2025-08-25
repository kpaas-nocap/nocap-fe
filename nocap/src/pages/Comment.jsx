import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/StyledComment";

const Comment = () => {
  const navigate = useNavigate();

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
      <C.List>
        <C.Component>
          <C.Title>댓글내용</C.Title>
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
