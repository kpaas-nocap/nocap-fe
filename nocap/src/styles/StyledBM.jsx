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
  color: #686868;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

export const Cate = styled.div`
  margin-top: 24px;
  display: flex;
  width: 368px;
  justify-content: space-between;
  align-items: center;
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

export const List = styled.div`
  display: flex;
  felx-directin: column;
  gap: 20px;
  margin-top: 30px;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  padding: 0 10px 0 0;
`;

export const Img = styled.div`
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 15px;
  overflow: hidden; /* ✅ 넘치는 부분 잘라내기 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
    flex-shrink: 0;
    border-radius: 15px;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 217px;

  div {
    display: flex;
    width: 50px;
    height: 26px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 106.667% */
    letter-spacing: -0.3px;
    border-radius: 15px;
    background: #f5f5f5;
  }

  img {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;

export const Title = styled.div`
  color: #1e1e1e;
  margin-left: 3px;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-top: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;

  word-break: keep-all; /* 단어 단위 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어 줄바꿈 */
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Icons = styled.div`
  width: 179px;
  height: 26px;
  flex-shrink: 0;
  padding: 0 5px 0 4px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  #date {
    width: 14.222px;
    height: 11.556px;
    flex-shrink: 0;
  }

  #dt {
    margin-left: 2px;
    color: #686868;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.36px;
  }

  #trust {
    margin-left: 13px;
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
  }

  #tt {
    margin-left: 2px;
    color: #f34135;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.24px;
  }
`;
