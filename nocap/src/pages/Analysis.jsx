import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/StyledAnalysis";
import ASide from "./ASide";

const Analysis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddBox, setShowAddBox] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("home");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const navigate = useNavigate();
  const goDet = () => navigate(`/analysis/article`);

  return (
    <A.Container>
      <A.Header>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
          onClick={toggleSidebar}
        />
      </A.Header>
      <A.Body>
        <A.SearchBar>
          <img
            id="plus"
            src={`${process.env.PUBLIC_URL}/images/plus.svg`}
            alt=""
            onClick={() => setShowAddBox((prev) => !prev)}
          />
          <input type="text" placeholder="URL을 입력하세요." />
          <img
            src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
            alt="search"
          />
        </A.SearchBar>
        {showAddBox && (
          <A.AddBox>
            <A.ANews>
              <img
                src={`${process.env.PUBLIC_URL}/images/clip.svg`}
                alt="clip"
              />
              <div>기사 URL 추가</div>
            </A.ANews>
            <A.Hr />
            <A.AVid>
              <img
                src={`${process.env.PUBLIC_URL}/images/video.svg`}
                alt="video"
              />
              <div>동영상 분석</div>
            </A.AVid>
            <A.AMore>
              <img
                src={`${process.env.PUBLIC_URL}/images/more_dot.svg`}
                alt="more"
              />
              <div>더 보기</div>
            </A.AMore>
          </A.AddBox>
        )}

        <A.Recent>
          <A.Title>최근 팩트체크</A.Title>
          <A.List>
            <A.Comp>
              <A.Component onClick={goDet}>
                <div>
                  진짜 장마 온다… 내일 오후부터 토요일까지 전국에 많은 비
                </div>
              </A.Component>
              <A.Icon>
                <A.Date>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/date.svg`}
                    alt="date"
                  />
                  <div>2025/07/06</div>
                </A.Date>
                <A.Comment>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/comment.svg`}
                    alt="comment"
                  />
                  <div>댓글 6개</div>
                </A.Comment>
              </A.Icon>
            </A.Comp>
          </A.List>
        </A.Recent>

        <A.My>
          <A.Title>내가 분석한 뉴스</A.Title>
          <A.List>
            <A.Comp>
              <A.Component>
                <div>
                  진짜 장마 온다… 내일 오후부터 토요일까지 전국에 많은 비
                </div>
              </A.Component>
              <A.Icon>
                <A.Date>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/date.svg`}
                    alt="date"
                  />
                  <div>2025/07/06</div>
                </A.Date>
                <A.Comment>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/comment.svg`}
                    alt="comment"
                  />
                  <div>댓글 6개</div>
                </A.Comment>
              </A.Icon>
            </A.Comp>
          </A.List>
        </A.My>
      </A.Body>

      <ASide
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </A.Container>
  );
};

export default Analysis;
