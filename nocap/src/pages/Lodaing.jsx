import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as L from "../styles/StyledLoading";
import axios from "axios";

const images = [
  `${process.env.PUBLIC_URL}/images/loading1.png`,
  `${process.env.PUBLIC_URL}/images/loading2.png`,
  `${process.env.PUBLIC_URL}/images/loading3.png`,
];

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🌀 이미지 순환 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 700); // 0.7초마다 이미지 전환
    return () => clearInterval(interval);
  }, []);

  // 📡 분석 요청 및 200 응답 시 이동
  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const newsData = location.state?.news; // /news/detail에서 넘긴 뉴스 데이터

        if (!token || !newsData) {
          console.error("❌ 토큰 또는 뉴스 데이터 누락");
          navigate("/login/local");
          return;
        }

        // 1️⃣ 사용자 정보
        const userRes = await axios.get(
          "https://www.nocap.kr/api/nocap/user/me",
          { headers: { Authorization: token } }
        );
        const userId = userRes.data.id;

        // 2️⃣ 분석 요청
        const searchNewsDto = {
          url: newsData.url || "",
          title: newsData.title || "",
          content: newsData.content || "",
          date: newsData.date || "",
          image: newsData.image || "",
        };

        const analysisRes = await axios.post(
          "https://www.nocap.kr/api/nocap/analysis",
          {
            userId,
            plan: "PREMIUM",
            searchNewsDto,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        // 3️⃣ 성공 시 페이지 이동
        if (analysisRes.status === 200) {
          navigate("/analysis/article", {
            state: { analysisId: analysisRes.data.analysisId },
          });
        }
      } catch (error) {
        console.error("❌ 분석 요청 실패:", error);
        alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
        navigate(-1);
      }
    };

    fetchAnalysis();
  }, [navigate, location]);

  return (
    <L.Container>
      <L.LoaderWrapper>
        {/* 🖼️ 반복되는 이미지 */}
        <img
          src={images[currentImageIndex]}
          alt="loading"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            marginBottom: "30px",
            transition: "opacity 0.3s ease-in-out",
          }}
        />

        {/* 기존 로딩 텍스트 애니메이션 유지 */}
        <L.LoadingText>
          <L.Dot delay="0s" />
          <L.Dot delay="0.2s" />
          <L.Dot delay="0.4s" />
          <div>기사분석중</div>
          <L.Dot delay="0.6s" />
          <L.Dot delay="0.8s" />
          <L.Dot delay="1s" />
        </L.LoadingText>
      </L.LoaderWrapper>
    </L.Container>
  );
};

export default Loading;
