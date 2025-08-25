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
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/NOCAP.svg`}
          alt="logo"
        />
        <M.Icon>
          <img
            id="bell"
            src={`${process.env.PUBLIC_URL}/images/bell.svg`}
            alt="bell"
          />
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/setting.svg`}
            alt="setting"
          />
        </M.Icon>
      </M.Header>
      <M.Profile>
        <M.Detail>
          <M.Img>
            <img src={`${process.env.PUBLIC_URL}/images/person.svg`} alt="" />
          </M.Img>
          <M.Identity>
            <div id="rank">일반사용자</div>
            <div id="name">김팩트님</div>
          </M.Identity>
          <M.Edit>
            <img src={`${process.env.PUBLIC_URL}/images/pencil_w.svg`} alt="" />
          </M.Edit>
        </M.Detail>
        <M.Logout onClick={handleLogoutClick}>로그아웃</M.Logout>
        {isModalOpen && (
          <Logout onConfirm={handleConfirm} onCancel={handleCancel} />
        )}
      </M.Profile>
      <M.Point>
        <M.PTitle>보유 포인트</M.PTitle>
        <M.PDetail>
          <M.Analyze>
            <img
              src={`${process.env.PUBLIC_URL}/images/analysis_b.svg`}
              alt="analyze"
            />
            <div id="num">10</div>
          </M.Analyze>
          <M.Hr />
          <M.Comment>
            <img
              src={`${process.env.PUBLIC_URL}/images/comment_b.svg`}
              alt="comment"
            />
            <div id="num">10</div>
          </M.Comment>
        </M.PDetail>
      </M.Point>
      <M.Mention>오늘의 팩트체크를 확인해 보세요</M.Mention>
      <M.Archive>
        <M.ATitle>
          <div id="name">김팩트</div>
          <div id="detail">님의 아카이브</div>
        </M.ATitle>
        <M.List>
          <M.Component onClick={goRecent}>
            <div id="title">최근 본 뉴스</div>
            <div id="group">
              <div id="num">10</div>
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
          <M.Component>
            <div id="title">비교 요약 기록</div>
            <div id="group">
              <div id="num">10</div>
              <div id="detail">개</div>
            </div>
          </M.Component>
          <M.Component>
            <div id="title">맞춤 기사</div>
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
