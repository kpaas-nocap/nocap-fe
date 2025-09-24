import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as N from "../styles/StyledNews";
import NSide from "./NSide"; // 컴포넌트 경로에 따라 조정

const contentText = `
12·3 비상계엄 관련 내란·외환 혐의 2차 조사
조사 시간 총 9시간 30분
오전엔 체포영장 저지 혐의, 오후엔 국무회의 상황 조사
`;

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("정치");
  const categories = [
    "정치",
    "경제",
    "사회",
    "생활/문화",
    "세계",
    "IT/과학",
    "기타",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("news");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const navigate = useNavigate();

  const goDet = () => navigate(`/news/detail`);
  const goBack = () => navigate(-1);

  return (
    <N.Container>
      <N.Header>
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
          onClick={goBack}
        />
        <div>뉴스</div>
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
          alt="search"
          onClick={toggleSidebar}
        />
      </N.Header>

      <N.Body>
        <N.Category>
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={selectedCategory === item ? "active" : ""}
            >
              {item}
            </div>
          ))}
        </N.Category>

        <N.List>
          <N.Img onClick={goDet}>
            <N.Back />
            <N.TImg>
              <N.Up>주요뉴스</N.Up>
              <N.Down>
                <N.Title>
                  '초강수' 대출 규제 통했나… 서울 아파트값 상승세 둔화
                </N.Title>
              </N.Down>
            </N.TImg>
          </N.Img>
          <N.Text>
            <div id="title">내란특검 "尹 2차 대면조사 종료</div>
            <div id="content">
              {contentText
                .trim()
                .split("\n")
                .map((line, index) => (
                  <div key={index}>• {line}</div>
                ))}
            </div>
          </N.Text>
        </N.List>
      </N.Body>

      <NSide
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </N.Container>
  );
};

export default News;
