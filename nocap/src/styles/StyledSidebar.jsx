import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 402px;
  height: 100vh;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 402px;
  height: 102px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;

  #logo {
    width: 128px;
    // height: 32px;
    flex-shrink: 0;
    margin-top: 30px;
  }

  #x {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 31px;
    margin-left: 21px;
  }
`;

export const Hr = styled.div`
  width: 369px;
  height: 2px;
  flex-shrink: 0;
  background: #ebebeb;
`;

export const Hi = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 40px;
  margin-left: 21px;

  img {
    width: 14px;
    height: 14px;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Content = styled.div`
  margin-top: 90px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  width: 402px;
  align-items: center;
`;

export const Comp = styled.div`
  display: flex;
  width: 365px;
  justify-content: space-between;
  align-items: center;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;
