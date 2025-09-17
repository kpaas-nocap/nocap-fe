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

export const Input = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 368px;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    color: #686868;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }
`;

export const InputE = styled.div`
  margin-top: 9px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  justify-content: start;

  input {
    margin-left: 12px;
    color: #b2b2b2;
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

export const PW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 16px;

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

export const InputP = styled.div`
  margin-top: 9px;
  width: 368px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #cfcfcf;
  display: flex;
  justify-content: start;

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

export const Check = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  align-items: start;
`;

export const SCheckBox = styled.div`
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

export const Save = styled.div`
  margin-left: 5px;
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.26px;
`;

export const KCheckBox = styled.div`
  margin-left: 15px;
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

export const Keep = styled.div`
  margin-left: 5px;
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.26px;
`;

export const CheckIcon = styled.span`
  color: #fff;
  font-size: 16px;
  line-height: 1;
`;

export const Find = styled.div`
  margin-top: 34px;
  color: #4e4e4e;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const Go = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 299px;
`;

export const Signup = styled.div`
  display: flex;
  width: 184px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
`;

export const Login = styled.div`
  display: flex;
  width: 184px;
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
`;
