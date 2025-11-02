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
  width: 510px;
  height: 295px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;

  p {
    margin-top: 12px;
    display: flex;
    width: 291px;
    height: 20.952px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.737px; /* 126.946% */
  }
`;

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  height: 62.857px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: left;
  width: 456px;

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.737px; /* 158.683% */
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Cancel = styled.button`
  display: flex;
  width: 201px;
  height: 65px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
  background: #fff;
  color: #213ce9;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.564px;
  outline: none;
  border: none;
`;

export const Logoutbtn = styled.button`
  display: flex;
  width: 219px;
  height: 65px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
  background: #213ce9;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.564px; /* 136.466% */
`;
