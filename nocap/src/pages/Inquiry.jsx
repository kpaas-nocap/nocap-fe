import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledInquiry";

const Inquiry = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goWrite = () => navigate(`/my/inquiry/write`);

  return (
    <I.Container>
      <I.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>1:1 문의</div>
      </I.Header>

      <I.Body>
        <I.Comp>
          <I.Element>
            <I.Detail>
              <div id="category">이용문의</div>
              <div id="title">문의 내용</div>
              <div id="date">작성일 2025. 07. 09 15: 04: 20</div>
            </I.Detail>
            <img
              src={`${process.env.PUBLIC_URL}/images/delete.svg`}
              alt="delete"
            />
          </I.Element>
          <I.Hr />
        </I.Comp>
      </I.Body>

      <I.Button onClick={goWrite}>새 문의 작성</I.Button>
    </I.Container>
  );
};

export default Inquiry;
