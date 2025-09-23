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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
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
