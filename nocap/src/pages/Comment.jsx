import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/StyledComment";
import axios from "axios";

const Comment = () => {
  const navigate = useNavigate();
  const [activeSort, setActiveSort] = useState("최신순"); // 초기값
  const [comments, setComments] = useState([]);

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        // 1. 댓글 데이터 가져오기
        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/comment/my",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        const commentList = res.data;

        // 2. 각 댓글의 analysisId로 뉴스 정보 가져오기
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

              return {
                ...comment,
                newsTitle: newsRes.data.mainNewsTitle,
                newsImage: newsRes.data.image,
              };
            } catch (err) {
              console.error("뉴스 정보 가져오기 실패:", err);
              return {
                ...comment,
                newsTitle: "제목을 불러올 수 없습니다.",
                newsImage: `${process.env.PUBLIC_URL}/images/news.jpg`,
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
          {["최신순", "공감순", "답글순"].map((label) => (
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
          <C.Component key={index}>
            <C.Title>{item.content}</C.Title>
            <C.News>
              <img id="thumbnail" src={item.newsImage} alt="thumbnail" />
              <C.NTitle>
                <div id="title">{item.newsTitle}</div>
                <div id="cc">JTBC뉴스</div>{" "}
                {/* 원하시면 동적으로 바꿀 수도 있음 */}
              </C.NTitle>
            </C.News>
            <C.Detail>
              <div>{new Date(item.date).toLocaleString()}</div>
              <div>좋아요 {item.recommendation}</div>
              <div>답글 3</div> {/* 실제 답글 수가 필요하다면 별도 연동 */}
            </C.Detail>
            <C.Hr />
          </C.Component>
        ))}
      </C.List>
    </C.Container>
  );
};

export default Comment;
