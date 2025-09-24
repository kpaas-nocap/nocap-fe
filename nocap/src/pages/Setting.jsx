import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSetting";
import Withdraw from "./Withdraw";

const Setting = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goEdit = () => navigate(`/my/edit`);
  const goPayment = () => navigate(`/my/payment`);
  const goInquiry = () => navigate(`/my/inquiry`);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWithdrawClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    console.log("탈퇴 됨!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log("취소 버튼 눌림!");
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <S.Header>
        <div id="title">설정</div>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/x_b.svg`}
          alt="x"
        />
      </S.Header>

      <S.Body>
        <S.List>
          <S.Comp onClick={goEdit}>
            <div>프로필 수정</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          <S.Comp onClick={goPayment}>
            <div>구매내역</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          <S.Comp>
            <div>버전 정보</div>
            <div id="new">1.1 최신</div>
          </S.Comp>
          <S.Comp onClick={goInquiry}>
            <div>문의하기</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          <S.Comp onClick={handleWithdrawClick}>
            <div>서비스 탈퇴</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/more_g.svg`}
              alt="more"
            />
          </S.Comp>
          {isModalOpen && (
            <Withdraw onConfirm={handleConfirm} onCancel={handleCancel} />
          )}
        </S.List>

        <S.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_big.png`}
            alt="logo"
          />
        </S.Logo>
      </S.Body>
    </S.Container>
  );
};

export default Setting;
