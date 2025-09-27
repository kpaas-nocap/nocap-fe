import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as N from "../styles/StyledNDet";

const NDetail = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goCheck = () => navigate(`/loading`);
  const goAnal = () => navigate(`/analysis`);
  const goMy = () => navigate(`/my`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);

  return (
    <N.Container>
      <N.MobileOnly>
        <N.Header>
          <img
            id="menu"
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
            onClick={goBack}
          />
          <div>뉴스</div>
        </N.Header>
      </N.MobileOnly>

      <N.DesktopOnly>
        <N.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <N.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기" onClick={goNews}>
              뉴스
              <div id="circle" />
            </div>
            <div id="tag" onClick={goAnal} title="뉴스 기사 분석하러 가기">
              기사분석
            </div>
            <div id="tag" onClick={goMy} title="마이 페이지로 이동">
              마이페이지
            </div>
          </N.Menu>
        </N.Head>
      </N.DesktopOnly>

      <N.Body>
        <N.News>
          <N.Title>
            <N.Category>경제</N.Category>
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
          <N.MobileOnly>
            <N.Hr />
          </N.MobileOnly>

          <N.Img>
            <img src={`${process.env.PUBLIC_URL}/images/news.jpg`} alt="news" />
          </N.Img>
          <N.Content>
            정부가 6억원 이상의 주택담보대출을 금지하는 6·27 대책을 발표한 지
            열흘째에 접어들면서 서울 부동산 상승세가 점차 둔화하는 모습입니다.
            <br />
            <br />
            한국부동산원이 발표한 6월 다섯째주 서울 아파트 가격 동향에 따르면
            서울의 아파트 매매가격 상승률은 0.4%로 지난 주 대비 소폭 떨어진
            것으로 나타났습니다.
            <br />
            <br />
            특히 강남·서초 등 강남권은 물론 용산과 성동, 마포 등 집값 상승을
            주도한 선호지역의 상승폭이 일제히 줄었습니다.
          </N.Content>

          <N.Button onClick={goCheck}>팩트체크하기</N.Button>
        </N.News>

        <N.DesktopOnly>
          <N.Recent>
            <N.RTitle>최근 분석된 뉴스 보기</N.RTitle>

            <N.RList>
              <N.RComp>
                <N.RDet>
                  <N.RCate>사회</N.RCate>
                  <N.RCc>v.daum.net</N.RCc>
                  <N.RTit>
                    “상속세 60%, 국가가 상속 받냐” 한국서 더는 못 살겠다…떠나는
                    사람 ‘세계 4위’
                  </N.RTit>
                  <N.RTime>5시간 전</N.RTime>
                </N.RDet>
                <N.RImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/news.jpg`}
                    alt="news"
                  />
                </N.RImg>
              </N.RComp>
              <N.RHr />
            </N.RList>
          </N.Recent>
        </N.DesktopOnly>
      </N.Body>
    </N.Container>
  );
};

export default NDetail;
