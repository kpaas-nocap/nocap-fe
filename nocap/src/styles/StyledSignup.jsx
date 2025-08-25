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
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const Box = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 72px;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }
`;

export const Ebox = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

export const EId = styled.div`
  width: 169px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;

  input {
    width: 150px;
    margin-left: 12px;
    color: black; /* 입력된 텍스트 색상 */
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

export const A = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EAddress = styled.div`
  position: relative; /* 추가 */
  width: 180px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
`;

export const DropdownBox = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: none;

  span {
    display: flex;
    align-items: center; /* 추가 */
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }

  img {
    margin-left: 13px;
    width: 12px;
    height: 6px;
    flex-shrink: 0;
  }
`;

export const OptionList = styled.div`
  position: absolute;
  top: 55px; /* ✅ 박스 밑에 정확히 나오도록 조정 */
  left: 0;
  width: 100%;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  background: white;
  z-index: 10;
`;

export const OptionItem = styled.div`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #000;

  &:hover {
    background: #f0f0f0;
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }
`;

export const Pbox = styled.div`
  margin-top: 5px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;

  input {
    flex: 1; /* 나머지 공간 모두 차지 */
    margin-left: 12px;
    color: black; /* 입력된 텍스트 색상 */
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

  img {
    margin-right: 15px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }
`;

export const Nbox = styled.div`
  margin-top: 5px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;

  input {
    margin-left: 12px;
    color: black; /* 입력된 텍스트 색상 */
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

export const Agree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Privacy = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  align-items: center;
`;

export const Pcheck = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #4e4e4e;
`;

export const Pdetail = styled.div`
  color: #4e4e4e;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.26px;
`;

export const Use = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  align-items: center;
`;

export const Ucheck = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #4e4e4e;
`;

export const Udetail = styled.div`
  color: #4e4e4e;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.26px;
`;

export const PCheckBox = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #4e4e4e;
  background-color: ${({ checked }) => (checked ? "#213CE9" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UCheckBox = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #4e4e4e;
  background-color: ${({ checked }) => (checked ? "#213CE9" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CheckIcon = styled.span`
  color: #fff;
  font-size: 16px;
  line-height: 1;
`;

export const Enter = styled.div`
  margin-top: 190px;
  display: flex;
  width: 312px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #213ce9;

  div {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
  }
`;
