import React, { useEffect, useState } from "react";
import * as L from "../styles/StyledLoading";

const images = [
  `${process.env.PUBLIC_URL}/images/loading1.png`,
  `${process.env.PUBLIC_URL}/images/loading2.png`,
  `${process.env.PUBLIC_URL}/images/loading3.png`,
];

const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🌀 이미지 순환 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 700); // 0.7초마다 이미지 전환
    return () => clearInterval(interval);
  }, []);

  return (
    <L.Container>
      <L.LoaderWrapper>
        <img
          src={images[currentImageIndex]}
          alt="loading"
          style={{
            height: "200px",
            objectFit: "contain",
            marginBottom: "30px",
            transition: "opacity 0.3s ease-in-out",
          }}
        />
        <L.LoadingText>
          <L.Dot delay="0s" />
          <L.Dot delay="0.2s" />
          <L.Dot delay="0.4s" />
          <div>기사 분석 중</div>
          <L.Dot delay="0.6s" />
          <L.Dot delay="0.8s" />
          <L.Dot delay="1s" />
        </L.LoadingText>
      </L.LoaderWrapper>
    </L.Container>
  );
};

export default Loading;
