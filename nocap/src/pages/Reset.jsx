import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledReset";
import { MobileOnlyBut } from "../styles/StyledPFind";

const Reset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goLogin = () => navigate(`/login/local`);
  const goMain = () => navigate(`/`);
  const goFind = () => {
    if (passwordError || confirmError || !password || !confirmPassword) {
      // 조건 불만족 시 아무 동작도 안 함
      alert("비밀번호를 확인해주세요.");
      return;
    }
    navigate(`/find`);
  };
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
    <R.Container>
      <R.MobileOnly>
        <R.Header>
          <R.Back onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
              alt="back"
            />
          </R.Back>
          <R.Title>
            <div>비밀번호 재설정</div>
          </R.Title>
        </R.Header>
      </R.MobileOnly>

      <R.DesktopOnly>
        <R.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <R.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기">
              뉴스
            </div>
            <div id="tag" onClick={goLogin}>
              로그인/회원가입
              <div id="circle" />
            </div>
          </R.Menu>
        </R.Head>
        <R.Tit>비밀번호 재설정</R.Tit>
      </R.DesktopOnly>

      <R.Body>
        <R.Frame>
          <R.Input>
            {/* 새 비밀번호 */}
            <R.PW>
              <div>새 비밀번호</div>
              <R.InputP>
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
              </R.InputP>
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
            </R.PW>

            {/* 비밀번호 확인 */}
            <R.PW>
              <div>비밀번호 확인</div>
              <R.InputP>
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
              </R.InputP>
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
            </R.PW>
          </R.Input>

          <R.DesktopOnly>
            <R.Go>
              <R.Signup onClick={goLogin}>로그인</R.Signup>
              <R.Login
                onClick={goFind}
                disabled={
                  passwordError || confirmError || !password || !confirmPassword
                }
              >
                비밀번호 찾기
              </R.Login>
            </R.Go>
          </R.DesktopOnly>
        </R.Frame>
        <R.MobileOnlyBut>
          <R.Go>
            <R.Signup onClick={goLogin}>로그인</R.Signup>
            <R.Login
              onClick={goFind}
              disabled={
                passwordError || confirmError || !password || !confirmPassword
              }
            >
              비밀번호 찾기
            </R.Login>
          </R.Go>
        </R.MobileOnlyBut>
      </R.Body>
    </R.Container>
  );
};

export default Reset;
