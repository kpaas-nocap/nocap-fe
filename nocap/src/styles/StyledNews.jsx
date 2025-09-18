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
  width: 402px;
  height: 54px;
  flex-shrink: 0;
  padding: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  #menu {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
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

  #search {
    width: 23.999px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  width: 368px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 5px;

  div {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */

    &.active {
      color: #000000;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 15px;
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Back = styled.div`
  width: 368px;
  height: 71px;
  flex-shrink: 0;
  border-radius: 24px 24px 0 0;
  background: #1d1d1d;
  //   position: relative;
  //   z-index: 2;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -72px;
  width: 368px;
  height: 226px;
`;

export const Up = styled.div`
  width: 99px;
  height: 37px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/news.jpg");
  background-size: 368px 226px;
  background-position: top left;
  border-radius: 24px 24px 0 0;
  text-align: center;
  justify-content: center;
  display: flex;
  color: #fff;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  padding: 8.5px 0;
`;

export const Down = styled.div`
  width: 368px;
  height: 189px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("/images/news.jpg");
  background-size: 368px 226px;
  background-position: left -37px; /* Up 높이만큼 올려서 이어지게 */
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
  letter-spacing: 0.44px;
  width: 368px;
  padding: 0 14px;
  margin-top: auto;
  margin-bottom: 11px;
  word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
  overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
  display: -webkit-box;
  -webkit-line-clamp: 2; // 최대 2줄
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 12px 6px;
  width: 368px;
  height: 121px;
  flex-shrink: 0;
  border-radius: 20px;
  background: linear-gradient(0deg, #213ce9 0%, #213ce9 100%),
    lightgray 50% / cover no-repeat;

  #title {
    margin-left: 12px;
    color: #fff;
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 115.789% */
    letter-spacing: 0.38px;
  }

  #content {
    color: #fff;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 146.667% */
    letter-spacing: -0.3px;
  }
`;
