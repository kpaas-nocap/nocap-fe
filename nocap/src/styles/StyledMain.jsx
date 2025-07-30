import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 200px;
`;

export const Header = styled.div`
  height: 80px;
  background: #213ce9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 17px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const blueWhiteMove = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

export const SearchBar = styled.div`
  margin-top: 42px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  // border: 1.5px solid #213ce9;
  // box-shadow: 0 0 8px 2px rgba(33, 60, 233, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(270deg, #213ce9, #ffffff, #213ce9) border-box;
  border: 1.5px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 200% auto;
  animation: ${blueWhiteMove} 3s linear infinite;

  box-shadow: 0 0 8px 2px rgba(33, 60, 233, 0.2); /* 은은한 파란 그림자 */

  input {
    flex: 1;
    color: black;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #acacac; /* placeholder 색상 */
    }
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const Ranking = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  align-items: center;
`;

export const RTitle = styled.div`
  width: 368px;
  margin-left: 6px;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const RBox = styled.div`
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  padding: 22px;
  width: 368px;
  height: 169px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #f1f1ff;
  background: #fefeff;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  #from {
    margin-top: 3px;
    color: #adadad;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  img {
    width: 55px;
    height: 25px;
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

export const RBar = styled.div`
  display: flex;
  margin-top: 27px;
  position: relative;

  img {
    width: 323px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 4px;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#0049ff"};
  transition: left 1s ease-in-out, background-color 0.3s ease-in-out;
`;

export const SliderWrapper = styled.div`
  width: 368px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

export const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 368}px)`};
  width: fit-content;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#0049ff" : "#d9d9d9")};
  margin: 0 4px;
`;

export const Pagenation = styled.div`
  display: flex;
  margin-top: 15px;
`;
