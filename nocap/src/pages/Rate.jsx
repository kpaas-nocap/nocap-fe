import React from "react";
import styled from "styled-components";

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100px;
`;

const StyledSvg = styled.svg`
  transform: rotate(-90deg); /* 12시 방향부터 시작 */
  width: 100px;
  height: 100px;
`;

const BackgroundCircle = styled.circle`
  fill: none;
  stroke: #d3d3d3; /* 회색 배경 */
  opacity: 50%;
  stroke-width: 10;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: white; /* ✅ 채워지는 색 (원하는 색으로 변경 가능) */
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.6s ease; /* 부드러운 애니메이션 */
`;

const PercentText = styled.div`
  position: absolute;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Rate = ({ percent }) => {
  const radius = 45; // 원 반지름
  const circumference = 2 * Math.PI * radius; // 둘레 길이
  const offset = circumference - (percent / 100) * circumference; // 비례해서 잘라줌

  return (
    <CircleWrapper>
      <StyledSvg>
        <BackgroundCircle r={radius} cx="50" cy="50" />
        <ProgressCircle
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </StyledSvg>
      <PercentText>
        유사도
        <br />
        {percent}%
      </PercentText>
    </CircleWrapper>
  );
};

export default Rate;
