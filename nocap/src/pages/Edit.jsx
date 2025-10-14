import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "../styles/StyledEdit";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goInquiry = () => navigate(`/my/inquiry`);
  const goMy = () => navigate(`/my`);

  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);
  const [showNPw, setShowNPw] = useState(false);

  const [currentPassword, setCurrentPassword] = useState(""); // 🔐 현재 비밀번호
  const [newPassword, setNewPassword] = useState(""); // 🆕 새 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 🧾 비밀번호 확인

  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [username, setUsername] = useState(""); // 사용자 이름
  const [newUsername, setNewUsername] = useState(""); // 수정용 이름 입력값

  const [userId, setUserId] = useState("");

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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("토큰이 없습니다.");
          return;
        }

        const res = await fetch("https://www.nocap.kr/api/nocap/user/me", {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (!res.ok) throw new Error("유저 정보 조회 실패");

        const data = await res.json();

        setUsername(data.username);
        setNewUsername(data.username); // input에 초기값 설정
        setUserId(data.userId); // ✅ 여기 추가
      } catch (err) {
        console.error("유저 정보 불러오기 실패:", err);
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      // 비밀번호 확인 에러 있을 경우 요청 방지
      if (confirmError || passwordError) {
        alert("입력값을 확인해주세요.");
        return;
      }

      // 필드 구성 (입력된 값만 전송)
      const payload = {
        userId,
        ...(newUsername && { username: newUsername }),
        ...(currentPassword && { currentPassword }),
        ...(password && { newPassword: password }),
      };

      const res = await axios.patch(
        "https://www.nocap.kr/api/nocap/user/update",
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      alert("정보가 성공적으로 수정되었습니다.");
      navigate("/my"); // 예: 마이페이지로 이동
    } catch (error) {
      console.error("정보 수정 실패:", error);
      alert("정보 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <E.Container>
      <E.MobileOnly>
        <E.Header>
          <img
            onClick={goBack}
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
          <div>프로필 수정</div>
        </E.Header>
      </E.MobileOnly>

      <E.DesktopOnly>
        <E.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <E.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기" onClick={goNews}>
              뉴스
            </div>
            <div id="tag" onClick={goMy}>
              마이페이지
              <div id="circle" />
            </div>
          </E.Menu>
        </E.Head>
      </E.DesktopOnly>

      <E.DesktopOnly>
        <E.Nav>
          <E.NComp onClick={goMy}>
            <img
              src={`${process.env.PUBLIC_URL}/images/point_n.png`}
              alt="point"
            />
            <div>내 포인트</div>
          </E.NComp>
          <E.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/premium_n.png`}
              alt="point"
            />
            <div>프리미엄</div>
          </E.NComp>
          <E.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/edit_c.png`}
              alt="point"
            />
            <div>프로필 수정</div>
          </E.NComp>
          <E.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/buy_n.png`}
              alt="point"
            />
            <div>구매내역</div>
          </E.NComp>
          <E.NComp onClick={goInquiry}>
            <img
              src={`${process.env.PUBLIC_URL}/images/inquiry_n.png`}
              alt="point"
            />
            <div>문의하기</div>
          </E.NComp>
        </E.Nav>
      </E.DesktopOnly>

      <E.Box>
        <E.DesktopOnly>
          <E.Prof>
            <div>{username}님</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="profile"
            />
          </E.Prof>
        </E.DesktopOnly>

        <E.Body>
          <E.Comp>
            <E.Title>이름(닉네임)</E.Title>
            <E.Input>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </E.Input>
          </E.Comp>
          <E.Comp>
            <E.Title>현재 비밀번호 </E.Title>
            <E.Input>
              <input
                type={showNPw ? "password" : "text"}
                placeholder="현재 비밀번호를 입력하세요."
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/${
                  showNPw ? "eye_c.svg" : "eye_o.svg"
                }`}
                alt={showNPw ? "close" : "open"}
                onClick={() => setShowNPw(!showNPw)}
                style={{ cursor: "pointer" }}
              />
            </E.Input>
          </E.Comp>
          <E.Comp style={{ marginTop: "55px" }}>
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
          </E.Comp>
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
          </E.Comp>
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
        </E.Body>

        <E.MobileOnly>
          <E.Button onClick={handleSave}>완료</E.Button>
        </E.MobileOnly>

        <E.DesktopOnly>
          <E.But>
            <div id="out">회원 탈퇴하기</div>
            <div id="save" onClick={handleSave}>
              저장하기
            </div>
          </E.But>
        </E.DesktopOnly>
      </E.Box>
    </E.Container>
  );
};

export default Edit;
