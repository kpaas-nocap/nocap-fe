import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
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

export const List = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Component = styled.div`
  padding: 0 17px;
  display: flex;
  width: 368px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.375px;
`;

export const Detail = styled.div`
  gap: 7px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;

  div {
    color: #aaa;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

export const Hr = styled.div`
  margin-top: 15px;
  height: 1px;
  align-self: stretch;
  background: #d9d9d9;
`;
