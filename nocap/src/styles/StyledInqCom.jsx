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
  padding-bottom: 80px;

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
  padding: 15px 170px 15px 17px;
  align-items: center;
  gap: 128px;

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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Up1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  #pencil {
    margin-top: 20px;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }

  #write {
    margin-top: 10px;
    display: flex;
    width: 100px;
    height: 33px;
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
  }
`;

export const Prof = styled.div`
  display: flex;
  flex-direction: row;
  width: 641px;
  gap: 13px;
  align-items: center;
  justify-content: start;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  img {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 368px;

  @media screen and (min-width: 768px) {
    width: 699px;
    margin-top: 76px;
  }
`;

export const Up = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 699px;
`;

export const U = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  #suc {
    color: #abbaf9;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #cate {
    color: #b2b2b2;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    #suc {
      color: #213ce9;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    #cate {
      display: flex;
      padding: 5px 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 50px;
      border: 1px solid #213ce9;
      color: #000;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.3px;
    }
  }
`;

export const D = styled.div`
  color: #838383;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Down = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;

  #date {
    color: #838383;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
    margin-left: 21px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 25px;
  }
`;

export const Q = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;

  #id {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
  }

  #content {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
  }

  @media screen and (min-width: 768px) {
    gap: 10px;

    #id {
      color: #213ce9;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 150% */
    }

    #content {
      color: #1e1e1e;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
    }
  }
`;

export const A = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;

  #id {
    color: #f34135;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
  }

  #content {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    white-space: pre-wrap; /* ✅ 줄바꿈(\n)을 그대로 표시 */
  }

  @media screen and (min-width: 768px) {
    gap: 10px;

    #id {
      color: #f34135;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 150% */
    }

    #content {
      color: #1e1e1e;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 150% */
    }
  }
`;

export const Hr = styled.div`
  height: 1px;
  align-self: stretch;
  background: #ebebeb;
  margin-top: 15px;
`;

export const Button = styled.div`
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
  margin-top: 180px;
`;
