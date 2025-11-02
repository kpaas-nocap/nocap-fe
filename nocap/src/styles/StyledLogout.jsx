import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

export const ModalBox = styled.div`
  padding: 24px;
  text-align: center;
  width: 334px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;

  p {
    margin-left: -8px;
    display: flex;
    width: 219.188px;
    height: 20.952px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 100% */
  }
`;

export const Content = styled.div`
  margin-top: 12px;
  display: flex;
  height: 62.857px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: left;

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 11px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Cancel = styled.button`
  display: flex;
  width: 130px; /* 또는 더 작게 */
  height: 52px;
  justify-content: center;
  align-items: center;
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
  border: none;
`;

export const Logoutbtn = styled.button`
  margin-left: 15px;
  display: flex;
  width: 130px; /* 또는 더 작게 */
  height: 52px;
  justify-content: center;
  align-items: center;
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
  border: none;
`;
