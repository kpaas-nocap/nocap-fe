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
  width: 402px;
  flex-shrink: 0;
  padding-bottom: 115px;
  align-items: center;
`;

export const Header = styled.div`
  width: 402px;
  display: flex;
  align-items: start;
`;

export const Back = styled.div`
  margin-top: 15px;
  margin-left: 17px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Box = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-top: 38px;
  margin-left: -10px;

  img {
    width: 128px;
    // height: 32px;
    flex-shrink: 0;
  }
`;

export const Detail = styled.div`
  margin-top: 5px;
  div {
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Kakao = styled.div`
  margin-top: 296px;
  width: 312px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fae300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 22.071px;
    height: 20px;
    flex-shrink: 0;
  }

  div {
    margin-left: 13px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const General = styled.div`
  margin-top: 15px;
  width: 312px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #213ce9;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Signup = styled.div`
  margin-top: 15px;
  width: 312px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #213ce9;
  background: #213ce9;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    color: #fff;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
