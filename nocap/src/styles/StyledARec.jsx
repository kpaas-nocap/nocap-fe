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

export const Detail = styled.div`
  margin-top: 24px;
  display: flex;
  width: 368px;
  justify-content: space-between;
  align-items: center;
`;

export const Num = styled.div`
  display: flex;

  div {
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
  gap: 5px;
  flex-direction: row;

  img {
    width: 13px;
    height: 14px;
  }

  div {
    color: #686868;
    text-align: right;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
  }
`;

export const Body = styled.div`
  padding: 0 17px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 11px;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Thumb = styled.div`
  width: 178px;
  height: 121px;
  flex-shrink: 0;
  border-radius: 10px;
  border-radius: 10px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("/images/news.jpg");
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.26px;
  word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
  overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
  display: -webkit-box;
  -webkit-line-clamp: 2; // 최대 2줄
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin-left: auto;

  img {
    width: 14px;
    height: 14px;
    aspect-ratio: 1/1;
  }

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 160% */
    letter-spacing: -0.3px;
  }
`;
