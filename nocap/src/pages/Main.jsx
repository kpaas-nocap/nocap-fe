import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";
import Sidebar from "./Sidebar"; // 컴포넌트 경로에 따라 조정

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddBox, setShowAddBox] = useState(false);

  const rankData = [
    {
      title: "습지는 메탄 배출의 원흉이다.",
      from: "출처: 예상치 못한 범인, 메탄의 원흉은 ‘습지’?",
    },
    {
      title: "기후 변화는 사실일까?",
      from: "출처: 과학자들의 경고",
    },
    {
      title: "바다는 탄소를 저장한다?",
      from: "출처: 해양 보고서",
    },
    {
      title: "플라스틱의 진실",
      from: "출처: 환경 단체 보고서",
    },
  ];

  // 페이지 전환용
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev < rankData.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: true,
  });

  // 처음 렌더링 시에만 애니메이션 이동
  useEffect(() => {
    const initialOffset = rankData[0].circleIndex * 60;
    const timer = setTimeout(() => {}, 100);

    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("home");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <M.Container>
      <M.Header>
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
      </M.Header>
      <M.Body>
        <M.SearchBar>
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
        </M.SearchBar>
        {showAddBox && (
          <M.AddBox>
            <M.ANews>
              <img
                src={`${process.env.PUBLIC_URL}/images/clip.svg`}
                alt="clip"
              />
              <div>기사 URL 추가</div>
            </M.ANews>
            <M.Hr />
            <M.AVid>
              <img
                src={`${process.env.PUBLIC_URL}/images/video.svg`}
                alt="video"
              />
              <div>동영상 분석</div>
            </M.AVid>
            <M.AMore>
              <img
                src={`${process.env.PUBLIC_URL}/images/more_dot.svg`}
                alt="more"
              />
              <div>더 보기</div>
            </M.AMore>
          </M.AddBox>
        )}
        <M.Ranking>
          <M.RTitle>오늘의 인기뉴스</M.RTitle>

          <M.SliderWrapper {...handlers}>
            <M.SliderContainer currentIndex={currentIndex}>
              {rankData.map((item, idx) => (
                <M.RBox key={idx}>
                  <M.Han>
                    <img
                      id="cc"
                      src={`${process.env.PUBLIC_URL}/images/sbs.png`}
                      alt="sbs"
                    />
                    <div id="title">{item.title}</div>
                  </M.Han>
                  <div id="from">{item.from}</div>
                </M.RBox>
              ))}
            </M.SliderContainer>
          </M.SliderWrapper>

          <M.Pagenation>
            {rankData.map((_, i) => (
              <M.Dot key={i} active={i === currentIndex} />
            ))}
          </M.Pagenation>
        </M.Ranking>

        <M.Recent>
          <M.Title>최근 팩트체크</M.Title>
          <M.List>
            <M.Component>
              <div>진짜 장마 온다… 내일 오후부터 토요일까지 전국에 많은 비</div>
            </M.Component>
          </M.List>
        </M.Recent>
      </M.Body>

      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </M.Container>
  );
};

export default Main;
