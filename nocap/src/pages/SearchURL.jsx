import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSURL";

const SearchURL = () => {
  return (
    <S.Container>
      <S.SearchBar>
        <img src={`${process.env.PUBLIC_URL}/images/pencil.svg`} alt="pencil" />
        <input type="text" placeholder="URL 입력" />
      </S.SearchBar>
    </S.Container>
  );
};

export default SearchURL;
