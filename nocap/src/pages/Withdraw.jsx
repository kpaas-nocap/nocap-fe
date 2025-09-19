import React from "react";
import {
  ModalBackground,
  ModalBox,
  Content,
  ButtonWrapper,
  Cancel,
  Logoutbtn,
} from "../styles/StyledWithdraw";

export default function Withdraw({ onConfirm, onCancel }) {
  return (
    <ModalBackground>
      <ModalBox>
        <p>정말 서비스 탈퇴 하시겠어요?</p>
        <Content>
          <div>
            탈퇴하신 상태에서는 이전 검색 기록을 확인하실 수<br />
            없으며, 회원 탈퇴 전 검색하신 내용을 기반으로
            <br />
            제공되는 연관 기사 추천 기능도 이용하실 수 없습니다.
          </div>
        </Content>
        <ButtonWrapper>
          <Cancel id="cancel" onClick={onCancel}>
            취소
          </Cancel>
          <Logoutbtn id="yes" onClick={onConfirm}>
            탈퇴하기
          </Logoutbtn>
        </ButtonWrapper>
      </ModalBox>
    </ModalBackground>
  );
}
