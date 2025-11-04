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
    background: #fafbff;
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
  width: 402px;
  display: inline-flex;
  padding: 15px 167px 15px 17px;
  align-items: center;
  gap: 124px;

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
      margin-left: 87px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
  }
`;

export const Nav = styled.div`
  width: 95px;
  height: 531px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  position: fixed; /* 고정 위치 설정 */
  z-index: 1000; /* 다른 요소보다 위에 보이도록 */
  margin-left: 100px;
  margin-top: 100px;
`;

export const NComp = styled.div`
  width: 67px;
  height: 78px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 50px;
    flex-shrink: 0;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

export const Tit = styled.div`
  margin-top: 90px;
  width: 100%;
  align-items: center;
  text-align: center;
  color: #000;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Role = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 45px;
  text-align: left;
  width: 100%;
  margin-left: 25px;
`;

export const Hr = styled.div`
  background-color: #ebebeb;
  height: 2px;
  width: 402px;
  margin-top: 15px;
`;

export const Content = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  text-align: center;
  margin-top: 150px;
`;

export const Btn = styled.div`
  display: flex;
  width: 312px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #213ce9;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  margin: 250px auto 0; /* ⬅️ 가운데 정렬 */
`;

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 20px;
  width: 630px;
  align-items: start;
`;

export const Prof = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  img {
    margin-left: 12px;
    width: 50px;
    height: 50px;
  }

  #name {
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }

  #logout {
    margin-left: 10px;
    display: inline-flex;
    height: 26px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #fafafa;
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Point = styled.div`
  border-radius: 15px;
  background: #eaedff;
  display: flex;
  flex-direction: row;
  padding: 0 18px 0 18px;
  align-items: center;

  width: 630px;
  height: 62px;
  flex-shrink: 0;
  margin-top: 20px;
  padding: 14px 30px;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    aspect-ratio: 1/1;
    // border-radius: 8px; /* 💡 윤곽 둥글게 */
    // box-shadow: 0 2px 8px rgba(0, 102, 255, 0.25); /* 💡 파란빛 그림자 추가 */
    // filter: saturate(1.2) brightness(1.05) contrast(1.1); /* 💡 색감 강조 */
  }

  #detail {
    display: block;
    margin-left: 20px;
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 110px;
  }

  #point {
    margin-left: 90px;
    font-size: 20px;
  }
`;

export const Hr1 = styled.div`
  width: 2.005px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Rank = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  width: 251px;
`;
