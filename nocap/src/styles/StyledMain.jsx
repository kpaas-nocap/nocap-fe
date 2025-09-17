import styled, { keyframes } from "styled-components";

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
`;

export const Header = styled.div`
  height: 60px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 17px;
  align-items: center;

  #logo {
    margin-top: 18px;
    width: 128px;
    flex-shrink: 0;
  }

  #menu {
    margin-top: 18px;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
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
  margin-top: 22px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  // border: 1.5px solid #213ce9;
  // box-shadow: 0 0 8px 2px rgba(33, 60, 233, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(270deg, #213ce9, #ffffff, #213ce9) border-box;
  border: 1.5px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 200% auto;
  animation: ${blueWhiteMove} 3s linear infinite;

  box-shadow: 0 0 8px 2px rgba(33, 60, 233, 0.2); /* 은은한 파란 그림자 */

  #plus {
    margin-right: 10px;
  }

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
      font-family: Pretendard;
    }
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const AddBox = styled.div`
  position: absolute;
  top: 133px;
  left: 30px;
  margin-top: 4px;
  width: 150px;
  height: 108px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #e8ebff;
  padding: 7px 7px 18px 9px;
  z-index: 1000;
`;

export const ANews = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  img {
    margin-left: 4px;
    height: 14px;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Hr = styled.div`
  margin-top: 8px;
  width: 130px;
  height: 1px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.5);
`;

export const AVid = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;

  img {
    height: 16px;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const AMore = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  gap: 5px;
  align-items: center;

  img {
    height: 16px;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Ranking = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  margin-top: 53px;
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
  width: 369px;
  height: 121px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #f1f1ff;
  background: #fefeff;

  #from {
    margin-top: 5px;
    color: #adadad;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

export const Han = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  #cc {
    // width: 45px;
    height: 25px;
    flex-shrink: 0;
  }
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

export const Recent = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
`;

export const Title = styled.div`
  width: 368px;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;

export const Component = styled.div`
  width: 178px;
  height: 136px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 10px;
  padding: 0 10px 10px 10px;

  /* 배경 이미지 + 그 위에 반투명 블랙 그라데이션 오버레이 */
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("/images/news.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;

  div {
    color: #fff;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 2줄
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: auto; // 아래로 밀어내기
  }
`;
