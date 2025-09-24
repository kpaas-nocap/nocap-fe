import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "../styles/StyledEdit";

const Edit = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  // ✅ 비밀번호 조건 검사 함수
  const validatePassword = (value) => {
    // 영문 + 숫자 + 특수문자 포함, 8자 이상
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/;
    if (!regex.test(value)) {
      setPasswordError(
        "영문, 숫자, 특수문자를 포함해 8자 이상으로 설정해주세요."
      );
    } else {
      setPasswordError("");
    }
  };

  // ✅ 새 비밀번호 입력 이벤트
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  // ✅ 비밀번호 확인 입력 이벤트
  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmError("");
    }
  };

  return (
    <E.Container>
      <E.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>프로필 수정</div>
      </E.Header>

      <E.Body>
        <E.Comp>
          <E.Title>이름(닉네임)</E.Title>
          <E.Input>
            <input type="text" placeholder="" />
          </E.Input>
        </E.Comp>
        <E.Comp>
          <E.Title>새 비밀번호</E.Title>
          <E.Input>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="새로운 비밀번호를 입력하세요."
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                showPassword ? "eye_c.svg" : "eye_o.svg"
              }`}
              alt={showPassword ? "close" : "open"}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            />
          </E.Input>
          {passwordError && (
            <div
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "4px",
                marginLeft: "12px",
              }}
            >
              {passwordError}
            </div>
          )}
        </E.Comp>
        <E.Comp>
          <E.Title>새 비밀번호 확인</E.Title>
          <E.Input>
            <input
              type={showRPassword ? "password" : "text"}
              placeholder="비밀번호를 한 번 더 입력하세요."
              value={confirmPassword}
              onChange={handleConfirmChange}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                showRPassword ? "eye_c.svg" : "eye_o.svg"
              }`}
              alt={showRPassword ? "close" : "open"}
              onClick={() => setShowRPassword(!showRPassword)}
              style={{ cursor: "pointer" }}
            />
          </E.Input>
          {confirmError && (
            <div
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "4px",
                marginLeft: "12px",
              }}
            >
              {confirmError}
            </div>
          )}
        </E.Comp>
      </E.Body>

      <E.Button>완료</E.Button>
    </E.Container>
  );
};

export default Edit;
