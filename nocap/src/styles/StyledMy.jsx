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
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 200px;
  align-items: center;
`;

export const Header = styled.div`
  position: relative;
  width: 100%; /* 또는 width: 393px; */
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px; /* 양 옆 여백이 필요하면 추가 */

  #back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  #search {
    width: 21.923px;
    height: 21.923px;
    flex-shrink: 0;
  }

  div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }
`;

export const Main = styled.div`
  display: flex;
  width: 368px;
  flex-direction: column;
`;

export const Info = styled.div`
  margin-top: 46px;
  width: 368px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  #name {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.5px;
  }

  #sama {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.3px;
  }
`;

export const Logout = styled.div`
  display: flex;
  height: 26px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #ebebeb;

  div {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Edit = styled.div`
  margin-top: 10px;
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 45px;
  align-items: center;
  height: 71px;
`;

export const Recom = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-right: 50px;

  img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Bookmark = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-right: 50px;

  img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Record = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-right: 50px;

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const NewsT = styled.div`
  color: #686868;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.26px;
  margin-top: 50px;
`;

export const News = styled.div`
  margin-top: 15.5px;
  display: flex;
  flex-direction: column;
  gap: 25.5px;
`;

export const N1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const N2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const N3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const FuncT = styled.div`
  color: #686868;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.26px;
  margin-top: 47px;
`;

export const Func = styled.div`
  margin-top: 15.5px;
  display: flex;
  flex-direction: column;
`;

export const F1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const F2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;
