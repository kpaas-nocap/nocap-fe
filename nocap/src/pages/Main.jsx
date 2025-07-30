import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [circleX, setCircleX] = useState(0);

  const rankData = [
    {
      title: "습지는 메탄 배출의 원흉이다.",
      from: "출처: 예상치 못한 범인, 메탄의 원흉은 ‘습지’?",
      circleIndex: 1, // 왼쪽부터 0,1,2... (60px씩 이동)
    },
    {
      title: "기후 변화는 사실일까?",
      from: "출처: 과학자들의 경고",
      circleIndex: 0,
    },
    {
      title: "바다는 탄소를 저장한다?",
      from: "출처: 해양 보고서",
      circleIndex: 2,
    },
    {
      title: "플라스틱의 진실",
      from: "출처: 환경 단체 보고서",
      circleIndex: 1,
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
    const timer = setTimeout(() => {
      setCircleX(initialOffset);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <M.Container>
      <M.Header>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/logo_w.svg`}
          alt="logo"
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/images/menu.svg`}
          alt="menu"
        />
      </M.Header>
      <M.Body>
        <M.SearchBar>
          <input type="text" placeholder="URL을 입력하세요." />
          <img
            src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
            alt="search"
          />
        </M.SearchBar>
        <M.Ranking>
          <M.RTitle>오늘의 팩트체크 순위</M.RTitle>

          <M.SliderWrapper {...handlers}>
            <M.SliderContainer currentIndex={currentIndex}>
              {rankData.map((item, idx) => (
                <M.RBox key={idx}>
                  <div id="title">{item.title}</div>
                  <div id="from">{item.from}</div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/sbs.png`}
                    alt="sbs"
                  />
                  <M.RBar>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/fact_bar.svg`}
                      alt="bar"
                    />
                    {idx === 0 && <M.Circle style={{ left: `${circleX}px` }} />}
                  </M.RBar>
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
      </M.Body>
    </M.Container>
  );
};

export default Main;
