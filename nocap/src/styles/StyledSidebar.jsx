import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
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

export const Header = styled.div`
  width: 351px;
  height: 174px;
  flex-shrink: 0;
  background: #213ce9;
  display: flex;
  flex-direction: column;

  #x {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 31px;
    margin-left: 21px;
  }
`;

export const Hi = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-items: center;

  div {
    margin-left: 24px;
    color: #fff;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  img {
    margin-left: 8px;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;

export const Analyze = styled.div`
  margin-top: 34px;
  margin-left: 21px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
  width: 172px;
  height: 300px;
  flex-direction: row;
`;

export const ATitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AList = styled.div`
  display: flex;
  width: 62px;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

export const Hr = styled.div`
  margin-top: 42px;
  margin-left: 21px;
  width: 300px;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
`;

export const News = styled.div`
  margin-top: 26px;
  margin-left: 21px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
  width: 172px;
  height: 300px;
  flex-direction: row;
  margin-bottom: 110px;
`;

export const NTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NList = styled.div`
  display: flex;
  width: 62px;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

export const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden; /* ✅ 좌우 스크롤 막기 */

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
