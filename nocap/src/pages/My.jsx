import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMy";
import Logout from "./Logout";

const My = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
          onClick={goBack}
          id="back"
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>마이페이지</div>
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
          alt="search"
        />
      </M.Header>
      <M.Info>
        <M.Name>
          <div id="name">김팩트</div>
          <div id="sama">님</div>
        </M.Name>
        <M.Logout onClick={handleLogoutClick}>
          <div id="detail">로그아웃</div>
        </M.Logout>
        {isModalOpen && (
          <Logout onConfirm={handleConfirm} onCancel={handleCancel} />
        )}
      </M.Info>
      <M.Main>
        <M.Menu>
          <M.Recom>
            <img
              src={`${process.env.PUBLIC_URL}/images/recommend.svg`}
              alt="recommend"
            />
            <div>추천기사</div>
          </M.Recom>
          <M.Bookmark>
            <img
              src={`${process.env.PUBLIC_URL}/images/bookmark.svg`}
              alt="bookmark"
            />
            <div>북마크</div>
          </M.Bookmark>
          <M.Record>
            <img
              src={`${process.env.PUBLIC_URL}/images/record.svg`}
              alt="record"
            />
            <div>검색기록</div>
          </M.Record>
          <M.Setting>
            <img
              src={`${process.env.PUBLIC_URL}/images/setting.svg`}
              alt="setting"
            />
            <div>설정</div>
          </M.Setting>
        </M.Menu>
        <M.NewsT>뉴스 기능</M.NewsT>
        <M.News>
          <M.N1>
            <div>최근 분석 보기</div>
            <img src={`${process.env.PUBLIC_URL}/images/next.svg`} alt="next" />
          </M.N1>
          <M.N2>
            <div>뉴스 필터 설정</div>
            <img src={`${process.env.PUBLIC_URL}/images/next.svg`} alt="next" />
          </M.N2>
          <M.N3>
            <div>프리미엄 구독</div>
            <img src={`${process.env.PUBLIC_URL}/images/next.svg`} alt="next" />
          </M.N3>
        </M.News>
        <M.FuncT>설정</M.FuncT>
        <M.Func>
          <M.F1>
            <div>문의하기</div>
            <img src={`${process.env.PUBLIC_URL}/images/next.svg`} alt="next" />
          </M.F1>
          <M.F2>
            <div>탈퇴하기</div>
            <img src={`${process.env.PUBLIC_URL}/images/next.svg`} alt="next" />
          </M.F2>
        </M.Func>
      </M.Main>
    </M.Container>
  );
};

export default My;
