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
    color: #adadad;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    width: 264px;
  }
`;

export const Recent = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const List = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;
