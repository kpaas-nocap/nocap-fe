import React from "react";
import {
  ModalBackground,
  ModalBox,
  Content,
  ButtonWrapper,
  Cancel,
  Logoutbtn,
} from "../styles/StyledLogout";

export default function Logout({ onConfirm, onCancel }) {
  return (
    <ModalBackground>
      <ModalBox>
        <p>정말 로그아웃 하시겠어요?</p>
        <Content>
          <div>
            로그아웃 상태에서는 검색 기록을 확인할 수 없으며, <br />
            사용자가 이전에 검색한 내용을 기반으로 제공되는 <br />
            연관 기사 추천 기능도 이용하실 수 없습니다.
          </div>
        </Content>
        <ButtonWrapper>
          <Cancel id="cancel" onClick={onCancel} style={{ cursor: "pointer" }}>
            취소
          </Cancel>
          <Logoutbtn id="yes" onClick={onConfirm} style={{ cursor: "pointer" }}>
            로그아웃
          </Logoutbtn>
        </ButtonWrapper>
      </ModalBox>
    </ModalBackground>
  );
}
