import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMy";
import Logout from "./Logout";
import axios from "axios";

const My = () => {
  const navigate = useNavigate();

  const goRecent = () => navigate(`/my/recent`);
  const goAnal = () => navigate(`/my/analysis`);
  const goBookmark = () => navigate(`/my/bookmark`);
  const goComment = () => navigate(`/my/comment`);
  const goBack = () => navigate(-1);
  const goSetting = () => navigate(`/my/setting`);
  const goPre = () => navigate(`/premium`);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState(""); // ✅ 사용자 이름 저장

  const [infoMessageVisible, setInfoMessageVisible] = useState(false); // ✅ 상태 추가

  const handleInfoClick = () => {
    setInfoMessageVisible((prev) => !prev); // ✅ 토글
  };

  // ✅ 유저 정보 불러오기
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("로그인 토큰 없음");
          return;
        }

        const res = await axios.get("http://13.209.98.128/api/nocap/user/me", {
          headers: {
            Authorization: `${token}`,
          },
        });

        setUsername(res.data.username); // ✅ username 저장
      } catch (err) {
        console.error("유저 정보 불러오기 실패:", err);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("로그아웃 시도: 토큰 없음");
        navigate("/login");
        return;
      }

      // ✅ 백엔드 로그아웃 API 호출
      await axios.post("http://13.209.98.128/auth/logout", null, {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log("백엔드 로그아웃 완료");
    } catch (err) {
      console.error("로그아웃 API 호출 실패:", err);
      // 실패해도 토큰은 지워주고 로그인 페이지로 이동
    } finally {
      // ✅ 토큰 삭제 + 로그인 페이지 이동
      localStorage.removeItem("accessToken");
      navigate("/");
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    console.log("취소 버튼 눌림!");
    setIsModalOpen(false);
  };

  return (
    <M.Container>
      <M.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
          onClick={goBack}
        />
        <div>마이페이지</div>
        <img
          id="setting"
          src={`${process.env.PUBLIC_URL}/images/setting.svg`}
          alt="setting"
          onClick={goSetting}
        />
      </M.Header>
      <M.Profile>
        <M.Detail>
          <M.Img>
            <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="" />
          </M.Img>
          <M.Identity>
            <div id="rank">일반사용자</div>
            <div id="name">{username || "사용자"}</div>
          </M.Identity>
        </M.Detail>
        <M.Logout onClick={handleLogoutClick}>로그아웃</M.Logout>
        {isModalOpen && (
          <Logout onConfirm={handleConfirm} onCancel={handleCancel} />
        )}
      </M.Profile>

      <M.Info onClick={handleInfoClick}>
        {infoMessageVisible && (
          <M.InfoMessage>👇 눌러서 프리미엄 업그레이드</M.InfoMessage>
        )}
        <img src={`${process.env.PUBLIC_URL}/images/info.svg`} alt="info" />
      </M.Info>

      <M.Point>
        <M.Left>
          <img src={`${process.env.PUBLIC_URL}/images/left.png`} alt="left" />
          <div>10</div>
        </M.Left>
        <M.Hr />
        <M.Rank onClick={goPre}>
          <img
            src={`${process.env.PUBLIC_URL}/images/diamond.png`}
            alt="diamond"
          />
          <div>Free</div>
        </M.Rank>
      </M.Point>

      <M.Chance>
        <div id="base">분석할 수 있는 기회가</div>
        <div id="num">10번</div>
        <div id="base">남았어요</div>
      </M.Chance>

      <M.Bar>
        <div id="bar" />
        <img src={`${process.env.PUBLIC_URL}/images/rank.svg`} alt="rank" />
      </M.Bar>

      <M.Number>
        <div>0번</div>
        <div>10번</div>
      </M.Number>

      <M.Archive>
        <M.ATitle>
          <div id="name">{username || "사용자"}</div>
          <div id="detail">님의 아카이브</div>
        </M.ATitle>
        <M.List>
          <M.Component onClick={goRecent}>
            <div id="title">최근 본 뉴스</div>
            <div id="group">
              <div id="num">3</div>
              <div id="detail">개</div>
            </div>
          </M.Component>
          <M.Component onClick={goAnal}>
            <div id="title">분석 기록</div>
            <div id="group">
              <div id="num">10</div>
              <div id="detail">개</div>
            </div>
          </M.Component>
          <M.Component onClick={goBookmark}>
            <div id="title">북마크</div>
            <div id="group">
              <div id="num">10</div>
              <div id="detail">개</div>
            </div>
          </M.Component>
          <M.Component onClick={goComment}>
            <div id="title">내 댓글</div>
            <div id="group">
              <div id="num">10</div>
              <div id="detail">개</div>
            </div>
          </M.Component>
        </M.List>
      </M.Archive>
    </M.Container>
  );
};

export default My;
