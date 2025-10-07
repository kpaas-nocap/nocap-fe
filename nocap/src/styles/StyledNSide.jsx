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
  overflow: hidden;
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
  width: 402px;
  padding-bottom: 65px;
`;

export const Header = styled.div`
  width: 402px;
  flex-shrink: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #x {
    margin-left: 361px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 352px;
  margin-top: 20px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  input {
    width: 312px;
    border: none;
    outline: none;
    background: transparent;
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

export const Hr = styled.div`
  width: 352px;
  height: 2px;
  flex-shrink: 0;
  background: #000;
`;

export const Category = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CHr = styled.div`
  width: 352px;
  height: 1px;
  flex-shrink: 0;
  background: #e5e5e5;
  margin-top: 10px;
`;

export const Title = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 352px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
  }

  hr {
    width: 352px;
    height: 1px;
    flex-shrink: 0;
    background: #d9d9d9;
  }
`;

export const List = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 230px;
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 352px;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  img {
    width: 17.957px;
    height: 16.037px;
  }

  div {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

export const Right = styled.div`
  display: flex;

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const Premium = styled.div`
  display: flex;
  width: 352px;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
  }

  img {
    width: 16px;
    height: 14px;
    flex-shrink: 0;
  }
`;
