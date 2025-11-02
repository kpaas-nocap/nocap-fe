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
  padding: 15px 156px 15px 17px;
  align-items: center;
  gap: 113px;

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
  height: 795px;
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

export const Up = styled.div`
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
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 65px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Comp = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 368px;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 641px;
    justify-content: space-between;
  }
`;

export const Input = styled.div`
  padding: 15px 14px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    width: 316px;
    border: none;
    outline: none;
    background: transparent;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }

  @media screen and (min-width: 768px) {
    width: 470px;

    input {
      width: 100%;
    }
  }
`;

export const Text = styled.div`
  width: 368px;
  height: 252px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  padding: 14px;
  align-items: center;
  display: flex;

  textarea {
    text-align: left;
    border: none;
    outline: none;
    background: transparent;
    width: 90%;
    height: 90%;
    resize: none; /* 크기 조절 막기 */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }

  @media screen and (min-width: 768px) {
    width: 470px;
  }
`;

export const Dropdown = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-top: 5px;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 350px;
  width: 368px;

  @media screen and (min-width: 768px) {
    width: 470px;
    top: 444px;
    margin-left: 170px;
  }
`;

export const Option = styled.div`
  padding: 12px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
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
  margin-top: 44px;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;

  #see {
    display: flex;
    width: 320.5px;
    height: 53px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #fff;
    color: #213ce9;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
  }

  #go {
    display: flex;
    width: 320.5px;
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
  }
`;
