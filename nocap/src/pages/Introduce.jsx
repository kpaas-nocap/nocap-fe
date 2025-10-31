import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledIntro";
import axios from "axios";

const Introduce = () => {
  const navigate = useNavigate();
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goMy = () => navigate(`/my`);

  return (
    <I.Container>
      <I.Head>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          id="logo"
        />
        <I.Menu>
          <div id="tag" onClick={goMain} style={{ cursor: "pointer" }}>
            홈
          </div>
          <div id="tag" style={{ cursor: "pointer" }}>
            NOCAP 소개
            <div id="circle" />
          </div>
          <div id="tag" style={{ cursor: "pointer" }} onClick={goNews}>
            뉴스
          </div>
          <div id="tag" onClick={goMy} style={{ cursor: "pointer" }}>
            마이페이지
          </div>
        </I.Menu>
      </I.Head>

      <I.Title>
        <I.Text>
          <div id="detail">
            팩트 체크 <br />
            교차 검증 서비스{" "}
          </div>
          <div id="title">NOCAP</div>
        </I.Text>
        <img src={`${process.env.PUBLIC_URL}/images/phone.png`} alt="image" />
      </I.Title>

      <I.Body>
        <I.Why>
          <div id="simple">왜 </div>
          <div id="bold">NOCAP</div>
          <div id="simple"> 이 탄생했나요?</div>
        </I.Why>

        <I.List>
          <I.Comp>
            <img
              src={`${process.env.PUBLIC_URL}/images/tape.svg`}
              alt="tape"
              id="tape"
            />
            <I.Content>
              <I.Graph>
                <img
                  src={`${process.env.PUBLIC_URL}/images/graph.svg`}
                  alt="graph"
                  id="graph"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/detail.svg`}
                  alt="detail"
                  id="detail"
                />
              </I.Graph>
              <I.Text1>
                <div id="black">
                  가짜뉴스로 인해 <br />
                  진짜 뉴스를 볼 때도
                </div>
                <div id="blue">가짜인지 의심한다.</div>
              </I.Text1>
            </I.Content>
            <I.Source>
              출처: 팩트체크 현황과 이슈에 대한 네트워크 분석: 코로나19를
              중심으로
            </I.Source>
          </I.Comp>
          <I.Comp>
            <img
              src={`${process.env.PUBLIC_URL}/images/tape.svg`}
              alt="tape"
              id="tape"
            />

            <I.T1>
              기존 팩트체크는 검증 대상을
              <br /> 사용자가 선택할 수 없음 → 권위적 구조
            </I.T1>

            <I.B1>
              <div className="text">
                이나연(2018)의 연구에서는 팩트체크 저널리즘의 한계를
                <br />
                크게 두 가지로 지적하고 있다. 첫째는{" "}
                <span className="blue">검증 대상 선택의 편향</span>
                <br />
                문제다. 선택의 편향이란, 팩트체크 기관의 정치적 성향이
                <br />
                검증대상을 선택할 때 영향을 미치는 것을 의미한다.
              </div>
            </I.B1>

            <I.Source>
              출처: 팩트체크 현황과 이슈에 대한 네트워크 분석: 코로나19를
              중심으로
            </I.Source>
          </I.Comp>
          <I.Comp>
            <img
              src={`${process.env.PUBLIC_URL}/images/tape.svg`}
              alt="tape"
              id="tape"
            />

            <I.T2>AI 출처일 때 확증편향이 더 줄어든다</I.T2>

            <I.B2>
              <div className="text">
                디지털 미디어 리터러시가 높은 집단은{" "}
                <span className="blue">
                  팩트체크 주체가 인공
                  <br />
                  지능일 때{" "}
                </span>
                인간 전문가나 크라우드 소싱일 때 비해{" "}
                <span className="blue">
                  확증편향이
                  <br /> 약하게{" "}
                </span>
                작용했다.
              </div>
            </I.B2>

            <I.Source>
              출처: 인공지능 팩트체크는 편향된 정보처리에 대한 해답이 될 수
              있는가?
            </I.Source>
          </I.Comp>
        </I.List>

        <I.Draw>
          <img
            src={`${process.env.PUBLIC_URL}/images/drawing.svg`}
            alt="화살표"
          />
        </I.Draw>

        <I.Need>
          <div id="black">원하는 뉴스 기사의 </div>
          <div id="blue">
            {" "}
            진위를 직접 비교해서 확인할 수 있는 교차 검증 도구
          </div>
          <div id="black">가 필요하다</div>
        </I.Need>

        <I.Image>
          <img src={`${process.env.PUBLIC_URL}/images/input.png`} alt="" />
          <I.Typing>
            <div id="title">원하는 기사 입력</div>
            <div id="detail">
              기사 제목이나 URL을 입력창에
              <br />
              복사해서 입력
            </div>
          </I.Typing>
        </I.Image>
        <I.Image>
          <I.Typing>
            <div id="title">AI 기사 분석 </div>
            <div id="detail">
              AI가 기사를 분석하고
              <br />
              유사한 기사를 수집 및 비교 분석
            </div>
          </I.Typing>
          <img src={`${process.env.PUBLIC_URL}/images/analyze.png`} alt="" />
        </I.Image>
        <I.Image>
          <img src={`${process.env.PUBLIC_URL}/images/check.png`} alt="" />
          <I.Typing>
            <div id="title">분석 결과 확인</div>
            <div id="detail">
              AI가 기사를 분석하고
              <br />
              유사한 기사를 수집 및 비교 분석
            </div>
          </I.Typing>
        </I.Image>

        <I.Slo>
          AI가 기사의 진위를 직접 알려주지 않습니다 <br />
          사실/거짓을 단정하지 않습니다
          <br />
          근거를 모아주고, 판단은 사용자가 직접 합니다
          <br />더 빠르고 공정하게 뉴스를 이해할 수 있습니다
        </I.Slo>

        <I.Go onClick={goMain} style={{ cursor: "pointer" }}>
          <div id="emo">👉</div>
          <div className="detail">
            지금 바로 <span className="blue"> NOCAP </span> 시작하기
          </div>
        </I.Go>
      </I.Body>
    </I.Container>
  );
};

export default Introduce;
