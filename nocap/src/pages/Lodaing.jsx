import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLoading";
import axios from "axios";

const images = [
  "/images/loading1.png",
  "/images/loading2.png",
  "/images/loading3.png",
];

const Loading = () => {
  return (
    <L.Container>
      <L.LoaderWrapper>
        <L.LoadingText>
          <L.Dot delay="0s" />
          <L.Dot delay="0.2s" />
          <L.Dot delay="0.4s" />
          <div>기사분석중</div>
          <L.Dot delay="0.6s" />
          <L.Dot delay="0.8s" />
          <L.Dot delay="1s" />
        </L.LoadingText>
      </L.LoaderWrapper>
    </L.Container>
  );
};

export default Loading;
