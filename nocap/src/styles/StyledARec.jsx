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

export const SearchBar = styled.div`
  margin-top: 8px;
  display: flex;
  width: 368px;
  height: 45px;
  padding: 12px 19px 12px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1.5px solid #213ce9;
  box-shadow: 0 0 10px 2px rgba(33, 60, 233, 0.3);

  input {
    height: 20px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    width: 300px;
    border: none;
    outline: none;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Body = styled.div`
  padding: 0 17px;
  display: flex;
  flex-direction: column;
`;

export const Num = styled.div`
  margin-top: 27px;
  color: #686868;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  color: #686868;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  text-align: left;
  width: 368px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  #all {
    display: flex;
    width: 60px;
    height: 36px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #fff;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
    border-radius: 10px;
    background: #686868;
  }

  #btn {
    display: inline-flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #f5f5f5;
    color: #686868;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
  }
`;

export const Sort = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;

  img {
    width: 13px;
    height: 14px;
  }

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
  }
`;

export const Bar = styled.div`
  display: flex;
  margin-top: 27px;
  position: relative;

  img {
    width: 368px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: -5px;
  left: 70px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#0049ff"};
  transition: left 1s ease-in-out, background-color 0.3s ease-in-out;
`;

export const List = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 11px;

  img {
    width: 178px;
    height: 121px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
  }

  div {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.26px;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    padding-right: 4px;
    padding-left: 4px;
  }
`;

export const Detail = styled.div`
  //   margin-top: 8px;
  width: 179px;
  height: 26px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Trust = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 16px;
    height: 16px;
    background: transparent;
    aspect-ratio: 1/1;
  }

  div {
    // margin-left: 2px;
    color: #f34135;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 160% */
    letter-spacing: -0.2px;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 14px;
    height: 14px;
    aspect-ratio: 1/1;
    background: transparent;
  }

  div {
    margin-left: 2px;
    color: #686868;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 160% */
    letter-spacing: -0.3px;
  }
`;
