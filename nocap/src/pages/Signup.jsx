import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignup";
import axios from "axios";

const Signup = () => {
  const [isPChecked, setIsPChecked] = useState(false);
  const [isUChecked, setIsUChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const emailOptions = ["naver.com", "gmail.com", "daum.net", "kakao.com"];

  const handleSelect = (email) => {
    setSelectedEmail(email);
    setIsOpen(false);
  };

  const isFormFilled =
    emailId.trim() !== "" &&
    password.trim() !== "" &&
    name.trim() !== "" &&
    selectedEmail !== "";

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goSuccess = () => {
    navigate(`/signup/success`);
  };
  const handleSignup = async () => {
    const signupData = {
      userId: `${emailId}@${selectedEmail}`,
      password: password,
      username: name,
    };

    // ✅ 콘솔에 전송할 데이터 출력
    console.log("📤 전송할 회원가입 데이터:", signupData);

    try {
      const response = await axios.post(
        "http://13.209.98.128/auth/form/signup",
        signupData
      );

      // ✅ 응답 결과 출력
      console.log("✅ 회원가입 성공!");
      console.log("📥 서버 응답 데이터:", response.data);
      console.log("🔐 Access Token:", response.headers["authorization"]);

      navigate("/signup/success");
    } catch (error) {
      console.error("❌ 회원가입 실패:", error);
      if (error.response) {
        console.error("📛 서버 응답 오류:", error.response.data);
      }
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
        </S.Back>
        <S.Title>
          <div>회원가입</div>
        </S.Title>
      </S.Header>
      <S.Box>
        <S.Email>
          <div>Email</div>
          <S.Ebox>
            <S.EId>
              <input
                type="id"
                placeholder="아이디"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </S.EId>
            <S.A>@</S.A>
            <S.EAddress>
              <S.DropdownBox onClick={() => setIsOpen(!isOpen)}>
                <span style={{ color: selectedEmail ? "#000" : "#b2b2b2" }}>
                  {selectedEmail ? `${selectedEmail}` : "이메일 주소 선택"}
                </span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${
                    isOpen ? "up.svg" : "down.svg"
                  }`}
                  alt={isOpen ? "up" : "down"}
                />
              </S.DropdownBox>
              {isOpen && (
                <S.OptionList>
                  {emailOptions.map((email) => (
                    <S.OptionItem
                      key={email}
                      onClick={() => handleSelect(email)}
                    >
                      {email}
                    </S.OptionItem>
                  ))}
                </S.OptionList>
              )}
            </S.EAddress>
          </S.Ebox>
        </S.Email>
        <S.Password>
          <div>비밀번호</div>
          <S.Pbox>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                showPassword ? "eye_c.svg" : "eye_o.svg"
              }`}
              alt={showPassword ? "close" : "open"}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            />
          </S.Pbox>
        </S.Password>
        <S.Name>
          <div>이름(닉네임)</div>
          <S.Nbox>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </S.Nbox>
        </S.Name>
        <S.Agree>
          <S.Privacy>
            <S.PCheckBox
              checked={isPChecked}
              onClick={() => setIsPChecked(!isPChecked)}
            >
              {isPChecked && <S.CheckIcon>✔</S.CheckIcon>}
            </S.PCheckBox>
            <S.Pdetail>개인정보 처리방침에 동의합니다.</S.Pdetail>
          </S.Privacy>
          <S.Use>
            <S.UCheckBox
              checked={isUChecked}
              onClick={() => setIsUChecked(!isUChecked)}
            >
              {isUChecked && <S.CheckIcon>✔</S.CheckIcon>}
            </S.UCheckBox>
            <S.Udetail>이용약관에 동의합니다.</S.Udetail>
          </S.Use>
        </S.Agree>
      </S.Box>
      <S.Enter
        style={{
          backgroundColor: isFormFilled ? "#213CE9" : "#D9D9D9",
          cursor: isFormFilled ? "pointer" : "default",
        }}
        onClick={isFormFilled ? handleSignup : undefined}
      >
        <div>완료</div>
      </S.Enter>
    </S.Container>
  );
};

export default Signup;
