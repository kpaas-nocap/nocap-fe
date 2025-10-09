import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRecent";
import axios from "axios";

const Recent = () => {
  const navigate = useNavigate();
  const [historyList, setHistoryList] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  // ✅ "몇 분 전", "몇 시간 전" 계산 함수
  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now - created;
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHr = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMin < 1) return "방금 전";
    if (diffMin < 60) return `${diffMin}분 전`;
    if (diffHr < 24) return `${diffHr}시간 전`;
    if (diffDay === 1) return "어제";
    return `${diffDay}일 전`;
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("⚠️ 로그인 토큰 없음");
          return;
        }

        // ✅ 최근 본 뉴스 10개 불러오기
        const res = await axios.get("https://www.nocap.kr/api/nocap/history", {
          headers: { Authorization: `${token}` },
        });

        if (Array.isArray(res.data)) {
          setHistoryList(res.data);
        } else {
          console.error("❌ 잘못된 응답 형식:", res.data);
        }
      } catch (err) {
        console.error("❌ 최근 본 뉴스 불러오기 실패:", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <R.Container>
      <R.Header>
        <img
          onClick={goBack}
          id="back"
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div id="title">최근 본 뉴스</div>
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
          alt="search"
        />
      </R.Header>
      <R.Body>
        <R.List>
          {historyList.length > 0 ? (
            historyList.map((item, idx) => (
              <R.Box key={idx}>
                <R.Hr>
                  <div id="ellipse" />
                  <div id="bar" />
                </R.Hr>

                <R.Component>
                  <R.Time>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/time.svg`}
                      alt="time"
                    />
                    <div>{getTimeAgo(item.createdAt)}</div>
                  </R.Time>

                  <R.Info>
                    <R.Title>{item.title}</R.Title>
                  </R.Info>

                  <R.Image>
                    <img
                      src={
                        item.image
                          ? item.image
                          : `${process.env.PUBLIC_URL}/images/news.jpg`
                      }
                      alt="news"
                    />
                  </R.Image>
                </R.Component>
              </R.Box>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              최근 본 뉴스가 없습니다.
            </div>
          )}
        </R.List>
      </R.Body>
    </R.Container>
  );
};

export default Recent;
