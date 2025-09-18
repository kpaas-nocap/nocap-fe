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
  padding: 13px 184px 17px 16px;
  align-items: flex-end;
  gap: 143px;

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
`;

export const Title = styled.div`
  text-align: left;
  width: 402px;
  padding: 0 24px;
  display: flex;
  gap: 6px;
  flex-direction: column;

  #category {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.26px;
  }

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 150% */
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 2줄
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-top: 27px;
  width: 368px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  #reporter {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.26px;
  }

  #date {
    margin-top: 3px;
    color: #a9a9a9;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.26px;
  }
`;

export const Hr = styled.div`
  width: 368px;
  height: 2px;
  flex-shrink: 0;
  background: #d9d9d9;
  margin-top: 13px;
`;

export const Img = styled.div`
  width: 368px;
  height: 195px;
  flex-shrink: 0;
  margin-top: 16px;

  img {
    width: 368px;
    height: 195px;
    flex-shrink: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 368px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  margin-top: 29px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const Button = styled.div`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #213ce9;
  box-shadow: 0 0 10px 0 rgba(33, 60, 233, 0.2);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  position: absolute;
  bottom: 70px;
`;
