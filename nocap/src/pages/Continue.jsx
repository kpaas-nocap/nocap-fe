import React from "react";
import {
  ModalBackground,
  ModalBox,
  Content,
  ButtonWrapper,
  Cancel,
  Logoutbtn,
} from "../styles/StyledContinue";

export default function Continue({ onConfirm, onGeneral, onCancel }) {
  return (
    <ModalBackground>
      <ModalBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/x_b.svg`}
          alt="x"
          onClick={onCancel}
        />
        <Content>
          <div>
            이번 분석은 추가 토큰을 소모합니다.
            <br />
            계속하시겠습니까?
          </div>
        </Content>
        <ButtonWrapper>
          <Cancel id="cancel" onClick={onGeneral} style={{ cursor: "pointer" }}>
            일반분석 하기
          </Cancel>
          <Logoutbtn id="yes" onClick={onConfirm} style={{ cursor: "pointer" }}>
            프리미엄 분석 하기
          </Logoutbtn>
        </ButtonWrapper>
      </ModalBox>
    </ModalBackground>
  );
}
