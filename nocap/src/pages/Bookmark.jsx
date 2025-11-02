import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../styles/StyledBM";
import axios from "axios";

const Bookmark = () => {
  const [sortOrder, setSortOrder] = useState("오래된 순"); // 초기값
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "오래된 순" ? "최신순" : "오래된 순"));
  };

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("⚠️ 토큰 없음");
          return;
        }

        // ✅ 1️⃣ 북마크 리스트 가져오기
        const res = await axios.get("https://www.nocap.kr/api/nocap/bookmark", {
          headers: { Authorization: `${token}` },
        });

        const bookmarkList = res.data;
        if (!Array.isArray(bookmarkList)) {
          console.error("❌ 북마크 응답 형식이 배열이 아님:", bookmarkList);
          setBookmarks([]);
          return;
        }

        // ✅ 2️⃣ 각 analysisId에 대해 분석 상세정보 요청
        const details = await Promise.all(
          bookmarkList.map(async (bm) => {
            try {
              const detailRes = await axios.get(
                `https://www.nocap.kr/api/nocap/analysis/${bm.analysisId}`,
                { headers: { Authorization: `${token}` } }
              );

              const data = detailRes.data;
              return {
                analysisId: bm.analysisId,
                category: data.category || "카테고리 없음",
                title: data.mainNewsTitle || "제목 없음",
                image:
                  data.image || `${process.env.PUBLIC_URL}/images/news.jpg`,
                date: data.date || "",
              };
            } catch (err) {
              console.error(
                `❌ 분석 ${bm.analysisId} 정보 불러오기 실패:`,
                err
              );
              return null;
            }
          })
        );

        // ✅ 3️⃣ 유효한 데이터만 필터링
        const validDetails = details.filter((d) => d !== null);
        setBookmarks(validDetails);
      } catch (error) {
        console.error("❌ 북마크 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  const sortedBookmarks = [...bookmarks].sort((a, b) => {
    if (sortOrder === "최신순") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  if (loading) {
    return (
      <B.Container>
        <div style={{ textAlign: "center", marginTop: "50px" }}>로딩 중...</div>
      </B.Container>
    );
  }

  const handleNavigateToAnalysis = (analysisId) => {
    navigate("/analysis/article", {
      state: { analysisId },
    });
  };

  return (
    <B.Container>
      <B.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>북마크</div>
      </B.Header>
      <B.Cate>
        <B.Num>
          <div>전체 {sortedBookmarks.length}</div>
        </B.Num>
        <B.Sort onClick={toggleSort}>
          <img src={`${process.env.PUBLIC_URL}/images/sort.svg`} alt="sort" />
          <div>{sortOrder}</div>
        </B.Sort>
      </B.Cate>
      <B.Body>
        <B.List>
          {sortedBookmarks.map((item) => (
            <B.Component
              key={item.analysisId}
              onClick={() => handleNavigateToAnalysis(item.analysisId)}
              style={{ cursor: "pointer" }}
            >
              <B.Img>
                <img src={item.image} alt="news" />
              </B.Img>
              <B.Detail>
                <B.Icon>
                  <div>{item.category}</div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/bookmark_b.svg`}
                    alt="bookmark"
                  />
                </B.Icon>
                <B.Title>{item.title}</B.Title>
                <B.Icons>
                  <img
                    id="date"
                    src={`${process.env.PUBLIC_URL}/images/date.svg`}
                    alt="date"
                  />
                  <div id="dt">
                    {item.date
                      ? new Date(item.date).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                      : ""}
                  </div>
                </B.Icons>
              </B.Detail>
            </B.Component>
          ))}
        </B.List>
      </B.Body>
    </B.Container>
  );
};

export default Bookmark;
