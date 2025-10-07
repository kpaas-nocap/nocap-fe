import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/StyledARec";
import axios from "axios";

const AnalRec = () => {
  const [sortOrder, setSortOrder] = useState("오래된 순"); // 초기값
  const [analyses, setAnalyses] = useState([]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "오래된 순" ? "최신순" : "오래된 순"));
  };
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        // 1. 전체 분석 리스트 불러오기
        const res = await axios.get(
          "https://www.nocap.kr/api/nocap/analysis/my",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        const analysisList = res.data;

        // 2. 각 analysisId로 상세 정보 요청
        const detailedResults = await Promise.all(
          analysisList.map(async (item) => {
            try {
              const detailRes = await axios.get(
                `https://www.nocap.kr/api/nocap/analysis/${item.analysisId}`,
                {
                  headers: {
                    Authorization: `${token}`,
                  },
                }
              );
              return detailRes.data;
            } catch (error) {
              console.error(
                `분석 ID ${item.analysisId}의 상세 정보 가져오기 실패`,
                error
              );
              return null;
            }
          })
        );

        // 3. 유효한 데이터만 저장
        const validResults = detailedResults.filter(Boolean);

        setAnalyses(validResults);
      } catch (err) {
        console.error("분석 기록 불러오기 실패:", err);
      }
    };

    fetchAnalyses();
  }, []);

  // 정렬
  const sortedAnalyses = [...analyses].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "최신순" ? dateB - dateA : dateA - dateB;
  });

  return (
    <A.Container>
      <A.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>분석기록</div>
      </A.Header>

      <A.Detail>
        <A.Num>
          <div>전체 {analyses.length}</div>
        </A.Num>
        <A.Sort onClick={toggleSort}>
          <img src={`${process.env.PUBLIC_URL}/images/sort.svg`} alt="sort" />
          <div>{sortOrder}</div>
        </A.Sort>
      </A.Detail>

      <A.Body>
        <A.List>
          {sortedAnalyses.map((item, index) => (
            <A.Component key={index}>
              <A.Thumb>
                <img
                  src={item.image}
                  alt="thumbnail"
                  style={{ width: "100%", height: "100%" }}
                />
              </A.Thumb>
              <A.Title>{item.mainNewsTitle}</A.Title>
              <A.Icons>
                <A.Comment>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/comment.svg`}
                    alt="comment"
                  />
                  <div>댓글 {item.commentCount || 0}개</div>{" "}
                  {/* 필요 시 commentCount 추가 */}
                </A.Comment>
                <A.Date>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/date.svg`}
                    alt="date"
                  />
                  <div>{new Date(item.date).toLocaleDateString()}</div>
                </A.Date>
              </A.Icons>
            </A.Component>
          ))}
        </A.List>
      </A.Body>
    </A.Container>
  );
};

export default AnalRec;
