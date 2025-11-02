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
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 10px 0 15px;
  align-items: center;
  height: 60px;
  justify-content: space-between;

  #logo {
    margin-top: 5px;
    width: 128px;
  }

  #menu {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;

export const Input = styled.div`
  margin-top: 22px;
  display: flex;
  width: 328px;
  height: 45px;
  padding: 12px 19px 12px 25px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1.5px solid #213ce9;
  box-shadow: 0 0 10px 2px rgba(33, 60, 233, 0.3);

  img {
    width: 20px;
    height: 20px;
  }

  input {
    border: none;
    outline: none;
    color: black;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    width: 264px;

    &placeholder {
      color: #adadad;
    }
  }
`;

export const Body = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: row;
  width: 348px;
  align-items: start;
  justify-content: space-between;

  img {
    width: 95px;
    height: 95px;
    flex-shrink: 0;
    border-radius: 5px;
    background: lightgray 50% / cover no-repeat;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
  }
`;

export const Det = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  gap: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  justify-content: space-between;
  height: 93px;

  #title {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    word-break: keep-all; // 단어 중간에서 줄바꿈 안 함 (한글 기준)
    overflow-wrap: break-word; // 영어 등 긴 단어는 줄바꿈 가능
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 2줄
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #date {
    color: #999;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.24px;
  }
`;

export const Hr = styled.div`
  width: 242px;
  height: 1px;
  flex-shrink: 0;
  background: #e5e5e5;
`;
