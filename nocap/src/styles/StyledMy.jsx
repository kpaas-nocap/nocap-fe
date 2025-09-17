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
  display: inline-flex;
  padding: 14.5px 16px 13.5px 17px;
  justify-content: center;
  align-items: center;
  gap: 116px;

  #back {
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

  #setting {
    width: 26px;
    height: 26px;
    aspect-ratio: 1/1;
  }
`;

export const Profile = styled.div`
  width: 402px;
  margin-top: 15.5px;
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
  img {
    width: 78px;
    height: 78px;
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
  width: 345px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #eaedff;
  display: flex;
  flex-direction: row;
  padding: 0 18px 0 18px;
  align-items: center;
`;

export const Left = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 137px;

  img {
    width: 35px;
    height: 35px;
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

export const Hr = styled.div`
  width: 2.005px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Rank = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 137px;

  img {
    width: 35px;
    height: 35px;
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

export const Chance = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 13px;
  width: 345px;
  text-align: left;
  margin-top: 31px;

  #base {
    color: #131314;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #num {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #bar {
    width: 300px;
    height: 8px;
    flex-shrink: 0;
    border-radius: 9.479px;
    background: #e5e9ef;
  }

  img {
    display: flex;
    width: 50px;
    height: 50px;/
    padding: 5.952px 9.369px 7.605px 8.929px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const Number = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 45px 0 0;
  width: 354px;
  position: absolute;
  top: 346px;

  div {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Archive = styled.div`
  margin-top: 47.5px;
  width: 368px;
  height: 418px;
  flex-shrink: 0;
  background-color: #ebedff;
  display: flex;
  flex-direction: column;
  padding: 20px 7px;
  border-radius: 15px 15px 0 0;
  align-items: center;
`;

export const ATitle = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;

  #name {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #detail {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
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
