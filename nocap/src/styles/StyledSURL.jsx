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
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 200px;
  align-items: center;
`;

export const SearchBar = styled.div`
  margin-top: 39px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  img {
    margin-left: 20px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  input {
    margin-left: 12px;
    color: black;
    text-align: left;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 111.111% */
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #acacac; /* placeholder 색상 */
    }
  }
`;
