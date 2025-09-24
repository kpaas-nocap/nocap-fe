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
  padding-bottom: 200px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 17px;
  align-items: center;
  gap: 149px;
  margin-top: 17px;

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }

  img {
    width: 20px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 85px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 368px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }

  img {
    height: 18px;
    flex-shrink: 0;
  }

  #new {
    color: #b5b5b5;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
`;

export const Logo = styled.div`
  margin-top: 150px;

  img {
    width: 303px;
    // height: 158px;
    flex-shrink: 0;
  }
`;
