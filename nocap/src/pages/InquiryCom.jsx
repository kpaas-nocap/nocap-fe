import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledInqCom";

const InquiryCom = () => {
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
            <I.Up>
              <div id="suc">답변완료</div>
              <div id="cate">이용문의</div>
            </I.Up>
            <I.Down>
              <I.Q>
                <div id="id">Q</div>
                <div id="content">
                  문의 내용 문의 내용 문의 내용 문의 내용 문의 내용 문의 내용
                  문의 내용 문의 내용 문의 내용 문의 내용 문의 내용
                </div>
              </I.Q>
              <I.A>
                <div id="id">A</div>
                <div id="content">
                  안녕하세요 고객님, 노캡 고객서비스지원팀 입니다.
                  <br /> <br />
                  대답 <br />
                  입니다.
                  <br />
                  <br /> 감사합니다.
                </div>
              </I.A>
              <div id="date">2025. 07. 09</div>
            </I.Down>
          </I.Element>
          <I.Hr />
        </I.Comp>
      </I.Body>

      <I.Button onClick={goWrite}>새 문의 작성</I.Button>
    </I.Container>
  );
};

export default InquiryCom;
