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
  width: 402px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;
  height: 54px;

  #back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  #title {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }

  #search {
    width: 21.923px;
    height: 21.923px;
    flex-shrink: 0;
  }
`;

export const Body = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: start;
  flex-direction: row;
  gap: 4px;
`;

export const Hr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #ellipse {
    width: 9px;
    height: 9px;
    background-color: #d9d9d9;
    border-radius: 50%;
  }

  #bar {
    margin-top: -3.5px;
    background: #d9d9d9;
    width: 3px;
    height: 253.5px;
    flex-shrink: 0;
  }
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  gap: 2px;
  align-items: center;

  img {
    width: 12px;
    height: 12px;
    aspect-ratio: 1/1;
  }

  div {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  margin-top: 10px;
  align-items: start;
`;

export const Title = styled.div`
  width: 292px;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;

  word-break: keep-all; /* 단어 단위 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어 줄바꿈 */
`;

export const Public = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
  }

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.36px;
  }
`;

export const Image = styled.div`
  width: 334px;
  height: 143px;
  flex-shrink: 0;
  margin-top: 5px;
  border-radius: 10px;

  img {
    width: 334px;
    height: 143px;
    flex-shrink: 0;
    border-radius: 10px;
  }
`;

export const Trust = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  gap: 2px;

  img {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
  }

  div {
    color: #f34135;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.24px;
  }
`;
