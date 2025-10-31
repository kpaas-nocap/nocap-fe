import React from "react";
import {
  ModalBackground,
  ModalBox,
  Content,
  ButtonWrapper,
  Cancel,
  Logoutbtn,
} from "../styles/StyledDelete";

export default function Logout({ onConfirm, onCancel }) {
  return (
    <ModalBackground>
      <ModalBox>
        <p>정말 서비스 탈퇴 하시겠어요?</p>
        <Content>
          <div>
            탈퇴하신 상태에서는 이전 검색 기록을 확인하실 수 없으며,
            <br />
            회원 탈퇴 전 검색하신 내용을 기반으로 제공되는 연관 기사
            <br />
            추천 기능도 이용하실 수 없습니다.
          </div>
        </Content>
        <ButtonWrapper>
          <Cancel id="cancel" onClick={onCancel} style={{ cursor: "pointer" }}>
            취소
          </Cancel>
          <Logoutbtn id="yes" onClick={onConfirm} style={{ cursor: "pointer" }}>
            탈퇴하기
          </Logoutbtn>
        </ButtonWrapper>
      </ModalBox>
    </ModalBackground>
  );
}
