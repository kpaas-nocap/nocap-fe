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
  height: 100%;

  @media screen and (min-width: 768px) {
    max-width: 100%; /* ✅ PC에서 화면이 꽉 차게 */
    width: 100%;
    display: flex;
    flex-direction: column;
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

// 모바일에서만 보이게 버튼
export const MobileOnlyBut = styled.div`
  display: block;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

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
      margin-left: 130px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
  }
`;

export const Header = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0;
`;

export const Tit = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 43px;
  width: 100%;
  text-align: center;
`;

export const Back = styled.div`
  position: absolute;
  left: 17px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 460px;
    height: 292px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #fff;
    margin-top: 33px;
  }
`;

export const Input = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 368px;

  @media screen and (min-width: 768px) {
    margin-top: 54px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    color: #686868;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }
`;

export const InputE = styled.div`
  margin-top: 9px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  justify-content: start;

  input {
    margin-left: 12px;
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
    border: none;
    outline: none; /* 클릭 시 border(실제로는 outline) 제거 */

    &::placeholder {
      color: #b2b2b2; /* placeholder 색상 */
    }
  }
`;

export const Go = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const Signup = styled.div`
  display: flex;
  width: 184px;
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
`;

export const Login = styled.div`
  display: flex;
  width: 184px;
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
`;
