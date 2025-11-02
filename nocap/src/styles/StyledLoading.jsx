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
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
  height: 100%;

  @media screen and (min-width: 768px) {
    max-width: 100%; /* ✅ PC에서 화면이 꽉 차게 */
    padding-bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fafbff;
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 93px;
  }
`;

export const LoadingText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: Pretendard;
  // font-size: 16px;
  // color: #888;

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 26px */
  }

  @media screen and (min-width: 768px) {
    div {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 52px */
    }
  }
`;

export const Dot = styled.span`
  width: 7.5px;
  height: 7.5px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.3;
  animation: ${fade} 1.2s infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;
