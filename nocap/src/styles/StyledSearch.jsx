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
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 368px;
  margin-top: 38px;

  #back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.div`
  display: flex;
  width: 328px;
  height: 45px;
  padding: 12px 19px 12px 25px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1.5px solid #213ce9;
  box-shadow: 0 0 10px 2px rgba(33, 60, 233, 0.3);

  img {
    width: 20px;
    height: 20px;
  }

  input {
    border: none;
    outline: none;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    width: 264px;
    color: black;

    &placeholder {
      color: #adadad;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 700px;
    height: 60px;
    padding: 15px 25px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1.505px solid #213ce9;
    background: #fff;
    box-shadow: 0 0 8.024px 2.006px rgba(33, 60, 233, 0.3);
    margin-top: 75px;

    img {
      width: 30px;
      height: 30px;
    }

    input {
      font-size: 20px;
      width: 95%;
    }
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

export const Recent = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 102px;
  }
`;

export const Title = styled.div`
  width: 368px;
  display: flex;
  align-items: center;
  text-align: left;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */

  @media screen and (min-width: 768px) {
    color: #686868;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 700px;
    margin-left: 7px;
  }
`;

export const List = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const Result = styled.div`
  display: flex;
  width: 368px;
  justify-content: space-between;
  align-items: center;

  #search {
    width: 16.847px;
    height: 17.065px;
  }

  div {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 300px;

    /* ✅ 추가 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  #x {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    width: 685px;
    align-items: center;
    justify-content: space-between;

    #search {
      width: 24.833px;
      height: 21.701px;
    }

    div {
      width: 620px;
      font-size: 18px;
    }

    #x {
      width: 25px;
      height: 25px;
    }
  }
`;
