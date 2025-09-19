import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPayment";

const Payment = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <P.Container>
      <P.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>구매내역</div>
      </P.Header>

      <P.Body></P.Body>
    </P.Container>
  );
};

export default Payment;
