import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMy";
import Logout from "./Logout";

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

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    console.log("로그아웃 됨!");
    setIsModalOpen(false);
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
            <div id="name">김팩트님</div>
          </M.Identity>
        </M.Detail>
        <M.Logout onClick={handleLogoutClick}>로그아웃</M.Logout>
        {isModalOpen && (
          <Logout onConfirm={handleConfirm} onCancel={handleCancel} />
        )}
      </M.Profile>

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
          <div id="name">김팩트</div>
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
