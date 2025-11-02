import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/StyledComment";
import axios from "axios";

const Comment = () => {
  const navigate = useNavigate();
  const [activeSort, setActiveSort] = useState("최신순"); // 초기값
  const [comments, setComments] = useState([]);

  const goBack = () => navigate(-1);

  // ✅ 상대 시간 계산 함수
  const formatRelativeTime = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now - date;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes}분 전`;
    } else if (diffHours < 24) {
      return `${diffHours}시간 전`;
    } else {
      // 날짜 포맷 yyyy.mm.dd
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}.${m}.${d}`;
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        // ✅ 1. 댓글 목록 불러오기
        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/comment/my",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        const commentList = res.data;

        // ✅ 2. 각 댓글의 analysisId 로 뉴스 정보 불러오기
        const enrichedComments = await Promise.all(
          commentList.map(async (comment) => {
            try {
              const newsRes = await axios.get(
                `https://www.nocap.kr/api/nocap/analysis/${comment.analysisId}`,
                {
                  headers: {
                    Authorization: `${token}`,
                  },
                }
              );

              const newsData = newsRes.data;
              return {
                ...comment,
                newsTitle:
                  newsData.mainNewsTitle || "제목을 불러올 수 없습니다.",
                newsImage:
                  newsData.image || `${process.env.PUBLIC_URL}/images/news.jpg`,
                newsDate: newsData.date, // ✅ 뉴스 생성일
              };
            } catch (err) {
              console.error("뉴스 정보 가져오기 실패:", err);
              return {
                ...comment,
                newsTitle: "제목을 불러올 수 없습니다.",
                newsImage: `${process.env.PUBLIC_URL}/images/news.jpg`,
                newsDate: null,
              };
            }
          })
        );

        setComments(enrichedComments);
      } catch (error) {
        console.error("댓글 불러오기 실패:", error);
      }
    };

    fetchComments();
  }, []);

  const handleNavigateToAnalysis = (analysisId) => {
    navigate("/analysis/article", {
      state: { analysisId },
    });
  };

  return (
    <C.Container>
      <C.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>내댓글</div>
      </C.Header>

      <C.Sort>
        <C.SDetail>
          {["최신순", "공감순"].map((label) => (
            <div
              key={label}
              onClick={() => setActiveSort(label)}
              style={{
                color: activeSort === label ? "#000000" : "#B2B2B2", // 클릭된 항목만 검정색
                cursor: "pointer",
              }}
            >
              {label}
            </div>
          ))}
        </C.SDetail>
        <C.Hr />
      </C.Sort>

      <C.List>
        {comments.map((item, index) => (
          <C.Component
            key={index}
            onClick={() => handleNavigateToAnalysis(item.analysisId)}
          >
            {/* ✅ 댓글 내용 */}
            <C.Title>{item.content}</C.Title>

            {/* ✅ 관련 뉴스 정보 */}
            <C.News>
              <img id="thumbnail" src={item.newsImage} alt="thumbnail" />
              <C.NTitle>
                <div id="title">{item.newsTitle}</div>
                {/* ✅ 뉴스 작성 날짜 */}
                <div id="cc">
                  {item.newsDate
                    ? new Date(item.newsDate).toLocaleString()
                    : "날짜 없음"}
                </div>
              </C.NTitle>
            </C.News>

            {/* ✅ 댓글 작성 시간 및 기타 정보 */}
            <C.Detail>
              <div>{formatRelativeTime(item.date)}</div>{" "}
              {/* ✅ 상대 시간 표시 */}
              <div>좋아요 {item.recommendation}</div>
            </C.Detail>

            <C.Hr />
          </C.Component>
        ))}
      </C.List>
    </C.Container>
  );
};

export default Comment;
