import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100dvh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 402px;
  flex-shrink: 0;
  padding-bottom: 200px;
  align-items: center;
`;

// 도트 애니메이션: opacity 밝아졌다 어두워지기
const fade = keyframes`
  0%, 80%, 100% {
    opacity: 0.3;
  }
  40% {
    opacity: 1;
  }
`;

export const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: Pretendard;
  font-size: 16px;
  color: #888;

  div {
    color: #999;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 26px */
  }
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.3;
  animation: ${fade} 1.2s infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;
