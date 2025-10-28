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
    background: #fff;
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
      margin-left: 35px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 64px;

  img {
    width: 19.999px;
    height: 19.998px;
    aspect-ratio: 20/20;
  }

  input {
    width: 760px;
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 111.111% */
    outline: none;
    border: none;
    background: transparent;

    &placeholder {
      color: #686868;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */
    }
  }
`;

export const Hr = styled.div`
  margin-top: 12px;
  width: 806px;
  height: 1px;
  flex-shrink: 0;
  background: #000;
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

  @media screen and (min-width: 768px) {
    display: flex;
    width: 806px;
    justify-content: space-between;
    align-items: center;
    margin-top: 51px;

    div {
      color: #b2b2b2;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */

      &.active {
        color: #000000;
      }
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    width: 657px;
  }
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
  margin-top: -71px;
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
    url(${(props) => props.$bg});
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
    url(${(props) => props.$bg});
  background-size: 368px 226px;
  background-position: left -37px;
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
  text-align: left;
  justify-content: space-between;
  height: 100px;

  #title {
    display: flex;
    flex-shrink: 0;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 100% */
  }

  #date {
    display: flex;
    flex-shrink: 0;
    color: #969696;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Desk = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 100px;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: row;
  width: 657px;
  gap: 20px;
`;

export const Image = styled.div`
  width: 183.115px;
  height: 117px;
  flex-shrink: 0;
  border-radius: 10px;
  background-size: cover; // ✅ 비율 유지하며 채우기
  background-position: center; // ✅ 중앙 정렬
  background-repeat: no-repeat; // ✅ 반복 없음

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
  }
`;

export const Recent = styled.div`
  width: 272px;
  flex-shrink: 0;
  text-align: left;

  #title {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 20px;
  }
`;

export const RBox = styled.div`
  width: 272px;
  height: 552px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
`;

export const First = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  img {
    width: 232px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 10px;
  }

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 2줄
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

export const RList = styled.div`
  gap: 14px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const RComp = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 232px;
`;

export const RImg = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background-size: cover; // ✅ 비율 유지하며 채우기
  background-position: center; // ✅ 중앙 정렬
  background-repeat: no-repeat; // ✅ 반복 없음

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
  }
`;

export const RText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: left;
  height: 100%;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.24px;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 2줄
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin: 0;
  }

  #date {
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;

    img {
      width: 10px;
      height: 10px;
      aspect-ratio: 1/1;
    }

    div {
      color: #969696;
      font-family: Pretendard;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
