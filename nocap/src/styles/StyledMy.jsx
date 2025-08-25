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
  height: 830px;
`;

export const Header = styled.div`
  margin-top: 21px;
  position: relative;
  width: 100%; /* 또는 width: 393px; */
  height: 61px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px; /* 양 옆 여백이 필요하면 추가 */

  #logo {
    height: 42px;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  #bell {
    width: 20px;
    height: 20px;
    aspect-ratio: 1/1;
  }

  #setting {
    width: 20px;
    height: 20px;
    aspect-ratio: 1/1;
  }
`;

export const Profile = styled.div`
  width: 402px;
  margin-top: 10px;
  padding: 0 17px;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background-color: rgba(33, 60, 233, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 56px;
    height: 58.374px;
    flex-shrink: 0;
  }
`;

export const Identity = styled.div`
  margin-left: 12px;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  #rank {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #name {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Edit = styled.div`
  margin-left: 30px;
  margin-top: 32px;
  width: 31px;
  height: 32px;
  flex-shrink: 0;
  background-color: #fafafa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;

export const Logout = styled.div`
  margin-top: 36px;
  display: inline-flex;
  height: 26px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fafafa;
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Point = styled.div`
  margin-top: 30px;
  width: 368px;
  height: 126px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PTitle = styled.div`
  margin-top: 18px;
  color: #686868;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 368px;
  text-align: left;
  padding: 0 17px;
`;

export const PDetail = styled.div`
  width: 344px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: row;
  margin-top: 17px;
  padding: 10px 18px;
  justify-content: space-between;
  align-items: center;
`;

export const Analyze = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 137px;
  align-items: center;

  img {
    width: 33.502px;
    height: 23.452px;
    flex-shrink: 0;
  }

  div {
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Hr = styled.div`
  width: 2px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #eaeaf9;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 137px;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    text-align: right;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Mention = styled.div`
  margin-top: 20px;
  display: flex;
  width: 368px;
  height: 54px;
  padding: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #213ce9;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Archive = styled.div`
  margin-top: 20px;
  width: 368px;
  height: 438px;
  flex-shrink: 0;
  background-color: #ebedff;
  display: flex;
  flex-direction: column;
  padding: 20px 7px;
  border-radius: 15px 15px 0 0;
`;

export const ATitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 368px;
  padding: 0 15px;
  text-align: left;

  #name {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #detail {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 한 줄에 2개
  gap: 12px 8px;
  margin-top: 21px;
`;

export const Component = styled.div`
  width: 173px;
  height: 108px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 21px 15px;
  align-items: start;
  gap: 9px;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #group {
    display: flex;
    flex-direction: row;
  }

  #num {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #detail {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
