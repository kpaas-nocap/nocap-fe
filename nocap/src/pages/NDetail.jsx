import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as N from "../styles/StyledNDet";

const NDetail = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goCheck = () => navigate(`/loading`);
  return (
    <N.Container>
      <N.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
          onClick={goBack}
        />
        <div>뉴스</div>
      </N.Header>

      <N.Body>
        <N.Title>
          <div id="category">경제</div>
          <div id="title">
            '초강수' 대출 규제 통했나…서울 아파트값 상승세 둔화
          </div>
        </N.Title>

        <N.Detail>
          <N.Info>
            <div id="reporter">박준우 기자</div>
            <div id="date">입력 2025.07.06 12:41</div>
          </N.Info>
          <img src={`${process.env.PUBLIC_URL}/images/link.svg`} alt="link" />
        </N.Detail>
        <N.Hr />

        <N.Img>
          <img src={`${process.env.PUBLIC_URL}/images/news.jpg`} alt="news" />
        </N.Img>
        <N.Content>
          정부가 6억원 이상의 주택담보대출을 금지하는 6·27 대책을 발표한 지
          열흘째에 접어들면서 서울 부동산 상승세가 점차 둔화하는 모습입니다.
          <br />
          <br />
          한국부동산원이 발표한 6월 다섯째주 서울 아파트 가격 동향에 따르면
          서울의 아파트 매매가격 상승률은 0.4%로 지난 주 대비 소폭 떨어진 것으로
          나타났습니다.
          <br />
          <br />
          특히 강남·서초 등 강남권은 물론 용산과 성동, 마포 등 집값 상승을
          주도한 선호지역의 상승폭이 일제히 줄었습니다.
        </N.Content>

        <N.Button onClick={goCheck}>팩트체크하기</N.Button>
      </N.Body>
    </N.Container>
  );
};

export default NDetail;
