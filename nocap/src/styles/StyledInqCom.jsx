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
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 368px;
`;

export const Up = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  #suc {
    color: #abbaf9;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #cate {
    color: #b2b2b2;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Down = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;

  #date {
    color: #838383;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
    margin-left: 21px;
  }
`;

export const Q = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;

  #id {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
  }

  #content {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
  }
`;

export const A = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;

  #id {
    color: #f34135;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
  }

  #content {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    white-space: pre-wrap; /* ✅ 줄바꿈(\n)을 그대로 표시 */
  }
`;

export const Hr = styled.div`
  height: 1px;
  align-self: stretch;
  background: #ebebeb;
  margin-top: 15px;
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
