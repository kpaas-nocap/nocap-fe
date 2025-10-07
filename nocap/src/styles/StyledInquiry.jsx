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
  padding-bottom: 80px;
  align-items: center;
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 368px;

  #success {
    width: 60px;
    color: #abbaf9;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  #category {
    color: #686868;
    text-align: left;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #title {
    margin-top: 3.5px;
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #date {
    color: #686868;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Hr = styled.div`
  height: 1px;
  align-self: stretch;
  background: #ebebeb;
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
  margin-top: auto;
`;
