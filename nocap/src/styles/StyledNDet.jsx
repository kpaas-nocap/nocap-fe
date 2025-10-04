import { styled } from "styled-components";

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

export const Header = styled.div`
  display: inline-flex;
  padding: 13px 184px 17px 16px;
  align-items: flex-end;
  gap: 143px;

  img {
    width: 24px;
    height: 24px;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 100% */
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px 0 75px;
  height: 100px;

  #logo {
    width: 188px;
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
      margin-left: 35px;
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

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 75px;
    align-items: start;
    gap: 60px;
    justify-content: center;
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.div`
  color: #213ce9;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.26px;
  align-self: flex-start; /* ✅ 부모 flex 크기에서 독립 */

  @media screen and (min-width: 768px) {
    display: inline-flex; /* ✅ inline-flex로 바꿔서 텍스트 크기에 맞게 조정 */
    width: auto; /* ✅ 고정된 width 제거 */
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 2px solid #213ce9;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

export const Title = styled.div`
  text-align: left;
  width: 402px;
  padding: 0 24px;
  display: flex;
  gap: 6px;
  flex-direction: column;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 150% */
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 2줄
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 620px;
    align-items: start;
    padding: 0;

    #title {
      margin-top: 10px;
      color: #000;
      font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 107.143% */
      letter-spacing: -0.56px;
    }
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-top: 27px;
  width: 368px;

  @media screen and (min-width: 768px) {
    width: 620px;
    align-items: start;

    img {
      width: 25px;
      height: 25px;
      aspect-ratio: 1/1;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  #reporter {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.26px;
  }

  #date {
    margin-top: 3px;
    color: #a9a9a9;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.26px;
  }

  @media screen and (min-width: 768px) {
    gap: 3px;

    #reporter {
      color: #686868;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    #date {
      color: #a9a9a9;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.28px;
    }
  }
`;

export const Hr = styled.div`
  width: 368px;
  height: 2px;
  flex-shrink: 0;
  background: #d9d9d9;
  margin-top: 13px;
`;

export const Img = styled.div`
  width: 368px;
  height: 195px;
  flex-shrink: 0;
  margin-top: 16px;

  img {
    width: 368px;
    height: 195px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    width: 620px;
    height: 100%;
    margin-top: 50px;

    img {
      width: 620px;
      height: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 368px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  margin-top: 29px;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    width: 620px;
    margin-top: 40px;

    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 156.25% */

    p {
      margin-bottom: 24px;
      line-height: 1.7;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #213ce9;
  box-shadow: 0 0 10px 0 rgba(33, 60, 233, 0.2);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  position: absolute;
  bottom: 70px;

  &:hover {
    box-shadow: 0 0 15px 4px rgba(33, 60, 233, 0.4);
    cursor: pointer;
  }
`;

export const Recent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 69px;
`;

export const RTitle = styled.div`
  color: #213ce9;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 45px;
`;

export const RList = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const RComp = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RDet = styled.div`
  display: flex;
  width: 329px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const RCate = styled.div`
  display: flex;
  padding: 4.5px 9px;
  justify-content: center;
  align-items: center;
  gap: 9px;
  border-radius: 45px;
  border: 0.9px solid #213ce9;
  color: #000;
  font-family: Pretendard;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.252px;
`;

export const RCc = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const RTit = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const RTime = styled.div`
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const RImg = styled.div`
  width: 110px;
  height: 110px;
  aspect-ratio: 1/1;

  img {
    width: 110px;
    height: 110px;
    aspect-ratio: 1/1;
  }
`;

export const RHr = styled.div`
  width: 469px;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
  margin-top: 12px;
`;
