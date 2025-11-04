import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPremium";
import axios from "axios";

const Premium = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goIntro = () => navigate(`/introduce`);
  const goNews = () => navigate(`/news`);
  const goEdit = () => navigate(`/my/edit`);
  const goInquiry = () => navigate(`/my/inquiry`);
  const goPay = () => navigate(`/my/payment`);
  const goMy = () => navigate(`/my`);

  const [userType, setUserType] = useState(""); // ✅ userType 상태 추가

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("로그인 토큰 없음");
          return;
        }

        const res = await axios.get("https://www.nocap.kr/api/nocap/user/me", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserType(res.data.userType);
        console.log("✅ 유저 정보 불러오기 성공:", res.data);
      } catch (err) {
        console.error("❌ 유저 정보 불러오기 실패:", err);
      }
    };

    fetchUser();
  }, []); // 페이지 처음 렌더링 시 실행

  return (
    <P.Container>
      <P.MobileOnly>
        <P.Header>
          <img
            onClick={goBack}
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
          <div>플랜 업그레이드</div>
        </P.Header>
      </P.MobileOnly>

      <P.DesktopOnly>
        <P.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <P.Menu>
            <div id="tag" onClick={goMain} style={{ cursor: "pointer" }}>
              홈
            </div>
            <div id="tag" onClick={goIntro} style={{ cursor: "pointer" }}>
              NOCAP 소개
            </div>
            <div id="tag" onClick={goNews} style={{ cursor: "pointer" }}>
              뉴스
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goMy}>
              마이페이지
              <div id="circle" />
            </div>
          </P.Menu>
        </P.Head>
      </P.DesktopOnly>

      <P.DesktopOnly>
        <P.Nav>
          <P.NComp style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/premium_c.png`}
              alt="point"
            />
            <div>프리미엄</div>
          </P.NComp>
          {userType !== "KAKAO" && (
            <P.NComp onClick={goEdit} style={{ cursor: "pointer" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/edit_n.png`}
                alt="point"
              />
              <div>프로필 수정</div>
            </P.NComp>
          )}
          <P.NComp style={{ cursor: "pointer" }} onClick={goPay}>
            <img
              src={`${process.env.PUBLIC_URL}/images/buy_n.png`}
              alt="point"
            />
            <div>구매내역</div>
          </P.NComp>
          <P.NComp onClick={goInquiry} style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/inquiry_n.png`}
              alt="point"
            />
            <div>문의하기</div>
          </P.NComp>
        </P.Nav>
      </P.DesktopOnly>

      <P.DesktopOnly>
        <P.Tit>플랜 업그레이드</P.Tit>
      </P.DesktopOnly>

      <P.Body>
        <P.Free>
          <P.Title>🆓 Free</P.Title>
          <P.Price>
            <div id="num">0</div>
            <div id="cost">원/ 월</div>
          </P.Price>
          <P.Status>나의 현재 플랜</P.Status>
          <P.Detail1>타인이 분석한 기사 열람 가능</P.Detail1>
          <P.Detail1>최신 분석 기사와 인기 분석 기사 제공</P.Detail1>
          <P.Detail1>분석된 기사에 댓글 1개 작성 가능</P.Detail1>
          <P.Detail1>느린 속도의 제한적 기사 분석</P.Detail1>
          <P.Detail1>유사 주제 기사 목록 표시</P.Detail1>
          <P.Detail1>원본 기사와 유사도 표시</P.Detail1>
        </P.Free>

        <P.Pro>
          <P.Title>💎 Pro</P.Title>
          <P.Price>
            <div id="num">7900</div>
            <div id="cost">원/ 월</div>
          </P.Price>
          <P.Use>Pro 이용하기 </P.Use>
          <P.Detail1>타인이 분석한 기사 열람 가능</P.Detail1>
          <P.Detail1>최신 분석 기사와 인기 분석 기사 제공</P.Detail1>
          <P.Detail2>팩트체크 버튼으로 즉시 기사 분석</P.Detail2>
          <P.Detail2>각 기사 별 원본 기사와의 신뢰도 표시</P.Detail2>
          <P.Detail1>유사 주제 기사 목록 표시</P.Detail1>
          <P.Detail1>원본 기사와 유사도 표시</P.Detail1>
          <P.Detail2>
            유사 기사 각각에 대해 원본 기사와 비교 분석 제공
          </P.Detail2>
        </P.Pro>
      </P.Body>
    </P.Container>
  );
};

export default Premium;
