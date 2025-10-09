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
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
  padding-bottom: 200px;

  @media screen and (min-width: 768px) {
    max-width: 100%; /* ✅ PC에서 화면이 꽉 차게 */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fafbff;
  }
`;

// 모바일에서만 보이게
export const MobileOnly = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// PC에서만 보이게
export const DesktopOnly = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Header = styled.div`
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

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px 0 75px;
  height: 100px;

  #logo {
    width: 188px;
  }
`;

export const Menu = styled.div`
  width: 800px;
  // height: 22px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 120px;

  #tag {
    margin-top: 16px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    display: flex;

    #circle {
      margin-top: -3px;
      margin-left: 87px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
  }
`;

export const Nav = styled.div`
  width: 95px;
  height: 795px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  position: fixed; /* 고정 위치 설정 */
  z-index: 1000; /* 다른 요소보다 위에 보이도록 */
  margin-left: 100px;
`;

export const NComp = styled.div`
  width: 67px;
  height: 78px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 50px;
    flex-shrink: 0;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  width: 402px;
  margin-top: 15.5px;
  padding: 0 17px;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    // margin-top: 60px;
    width: 630px;
    justify-content: start;
    align-items: center;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Id = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Img = styled.div`
  img {
    width: 78px;
    height: 78px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: 13px;
    img {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
    }
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

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    margin-top: 0;
  }
`;

export const Info = styled.div`
  width: 345px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  text-align: right;
  align-items: center;
  justify-content: end;
  gap: 3px;

  img {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    margin-right: 4px;
  }
`;

export const InfoMessage = styled.div`
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const Point = styled.div`
  margin-top: 4.5px;
  width: 345px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #eaedff;
  display: flex;
  flex-direction: row;
  padding: 0 18px 0 18px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 630px;
    height: 62px;
    flex-shrink: 0;
    margin-top: 20px;
    padding: 14px 30px;
    align-items: center;
    justify-content: center;
  }
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

  @media screen and (min-width: 768px) {
    width: 251px;
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

  @media screen and (min-width: 768px) {
    width: 251px;
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

  @media screen and (min-width: 768px) {
    margin-top: 42px;
    width: 630px;

    #base {
      color: #000;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    #num {
      color: #213ce9;
      font-family: Pretendard;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
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

  @media screen and (min-width: 768px){

  #bar{
    width: 569px;
    height: 8.493px;
    flex-shrink: 0;border-radius: 10.616px;
    background: #E5E9EF;
  }
}
`;

export const Number = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 45px 0 0;
  width: 354px;
  position: absolute;
  top: 326px;

  div {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media screen and (min-width: 768px) {
    width: 569px;
    top: 414px;
    padding: 0;
    margin-right: 52px;
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

export const Arc = styled.div`
  width: 630px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 90px;
`;

export const Choice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pick = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 425px;
  flex-shrink: 0;
  margin-left: 7px;

  #name {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
    transition: font-weight 0.3s ease;

    &.active {
      font-weight: 700;
    }
  }
`;

export const HrWrapper = styled.div`
  position: relative;
  width: 450px;
  margin-top: 10px;
`;

export const Hr1 = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #d9d9d9;
`;

export const Underline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  border-radius: 10px;
  background: #213ce9;
  transition: transform 0.3s ease, width 0.3s ease;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Content = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  width: 639px;
`;

export const News = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  text-align: left;

  img {
    width: 145px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 6.818px;
  }
`;

export const Rmf = styled.div`
  display: flex;
  width: 484px;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;

  #title {
    color: #2c2c2c;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #date {
    color: #aaa;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  div {
    color: #aaa;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

export const Hr2 = styled.div`
  height: 1px;
  align-self: stretch;
  background: #d9d9d9;
`;

export const Li = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 한 줄에 2개
  gap: 28px 30px;
  margin-top: 41px;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  width: 300px;
  gap: 10px;

  img {
    width: 300px;
    height: 180px;
    flex-shrink: 0;
    border-radius: 16.997px;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
