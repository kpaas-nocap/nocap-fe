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
  display: flex;
  flex-direction: row;
  margin-top: 17px;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 17px;
    margin-right: auto;
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
    margin-right: 138px;
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
  margin-top: 40px;
  gap: 25px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 80px;
    justify-content: center;
  }
`;

export const Free = styled.div`
  width: 368px;
  height: 365px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f9f9f9;
  padding: 32px 23px 20px 23px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  width: 322px;
  text-align: left;
`;

export const Price = styled.div`
  width: 322px;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 6px;
  margin-top: 5px;

  #num {
    color: #000;
    font-family: Pretendard;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #cost {
    margin-bottom: 15px;
    color: #878787;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px; /* 115.385% */
  }
`;

export const Status = styled.div`
  margin-top: 13px;
  width: 322px;
  margin-bottom: 8px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid #d9d9d9;
  color: #878787;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Detail1 = styled.div`
  margin-top: 12px;
  width: 322px;
  text-align: left;
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Pro = styled.div`
  width: 368px;
  height: 394px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ebedff;
  padding: 32px 23px 20px 23px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Use = styled.div`
  width: 322px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #213ce9;
  margin-top: 13px;
  margin-bottom: 8px;
  color: #fff;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Detail2 = styled.div`
  color: #213ce9;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 12px;
  width: 322px;
  text-align: left;
`;
