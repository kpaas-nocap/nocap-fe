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
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
  padding-bottom: 200px;

  @media screen and (min-width: 768px) {
    max-width: 100%; /* ✅ PC에서 화면이 꽉 차게 */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
  }
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

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 130px 0 75px;
    height: 100px;
    margin-top: 0px;

    #logo {
      width: 188px;
    }
  }
`;

// 모바일에서만 보이게
export const MobileOnly = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// PC에서만 보이게
export const DesktopOnly = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
  width: 800px;
  // height: 22px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 120px;

  #tag {
    margin-top: 16px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    display: flex;

    #circle {
      margin-top: -3px;
      margin-left: 18px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
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
  padding: 0 15px 0 25px;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(270deg, #213ce9, #ffffff, #213ce9) border-box;
  border: 1.5px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 200% auto;
  animation: ${blueWhiteMove} 3s linear infinite;

  box-shadow: 0 0 8px 2px rgba(33, 60, 233, 0.2); /* 은은한 파란 그림자 */

  #url {
    color: #adadad;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    width: 350px;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 60px;
    margin-top: 70px;

    #url {
      color: #adadad;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 20.061px; /* 100.304% */
    }

    img {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
    }
  }
`;

export const Hr = styled.div`
  margin-top: 8px;
  width: 130px;
  height: 1px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.5);
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
  flex-direction: row;
  gap: 7px;
  justify-content: space-between;
  padding: 22px;
  width: 369px;
  height: 121px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #f1f1ff;
  background: #fefeff;
  padding: 24px 15px 24px 20px;

  img {
    width: 98px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 5px;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
  }
`;

export const Han = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: left;
  width: 226px;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  #from {
    color: #adadad;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.26px;
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

export const Famous = styled.div`
  width: 1030px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 423px;
  height: 276px;
`;

export const Tit = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  letter-spacing: -0.4px;
  word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
  overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
  display: -webkit-box;
  -webkit-line-clamp: 2; // 최대 2줄
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: auto; // 아래로 밀어내기
`;

export const TTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  #title {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #hr {
    margin-left: 35px;
    margin-right: 20px;
    width: 60px;
    height: 2px;
    flex-shrink: 0;
    background: #121212;
  }

  #date {
    color: #686868;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const More = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  gap: 5px;
  align-items: center;
  margin-bottom: auto;

  #det {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  #hr {
    width: 72px;
    height: 1px;
    flex-shrink: 0;
    background: #686868;
  }
`;

export const Page = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-left: auto;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 519px;
    height: 276px;
    flex-shrink: 0;
    border-radius: 10px;
    z-index: 2;
  }

  #back {
    width: 509px;
    height: 274px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(33, 60, 233, 0.2);
    filter: blur(50px);
    z-index: 1;
    position: absolute;
    // right: 103px;
    // top: 405px;

    margin-left: 32px;
    margin-top: 29px;
  }
`;

export const Recent = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  margin-top: 34px;

  @media screen and (min-width: 768px) {
    width: 1030px;
    height: 235px;
    margin-top: 136px;
  }
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

  @media screen and (min-width: 768px) {
    width: 1030px;
    color: #213ce9;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;

  @media screen and (min-width: 768px) {
    width: 1030px;
    height: 235px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

// ✅ props로 image 받기
export const Component = styled.div`
  width: 178px;
  height: 136px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 10px;
  padding: 0 10px 10px 10px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${(props) => props.$bgImage || "/images/news.jpg"});
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
    word-break: keep-all;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: auto;
  }

  @media screen and (min-width: 768px) {
    width: 330px;
    height: 235px;
    padding: 20px;
    margin-top: 60px;

    div {
      font-size: 20px;
      letter-spacing: -0.4px;
    }
  }
`;
