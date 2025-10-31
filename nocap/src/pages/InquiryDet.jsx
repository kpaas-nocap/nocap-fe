import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledInquiryDet";
import axios from "axios";

const InquiryDet = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goMy = () => navigate(`/my`);
  const goEdit = () => navigate(`/my/edit`);
  const goIntro = () => navigate(`/introduce`);
  const goPre = () => navigate(`/premium`);
  const goPay = () => navigate(`/my/payment`);

  // ✅ 드롭다운 상태
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // ✅ 사용자 정보
  const [userInfo, setUserInfo] = useState({ username: "", userId: "" });

  // ✅ 문의내용 상태
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  // ✅ 카테고리 매핑 (한글 → 영어)
  const categoryMap = {
    이용문의: "INQUIRY",
    "계정·회원": "ACCOUNT",
    "결제·환불": "PAYMENT",
    "오류·버그": "BUG",
    기능제안: "RESTRICTION",
    "보안·신고": "SECURITY",
    기타문의: "ETC",
  };

  // ✅ 드롭다운 옵션 목록
  const options = Object.keys(categoryMap);

  // ✅ 선택한 옵션 클릭 시
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // ✅ 로그인한 유저 정보 불러오기 (/me)
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          alert("로그인이 필요합니다.");
          navigate("/login/local");
          return;
        }

        const res = await axios.get("https://www.nocap.kr/api/nocap/user/me", {
          headers: { Authorization: `${token}` },
        });

        console.log("✅ 사용자 정보:", res.data);
        setUserInfo(res.data);
        setEmail(res.data.userId || ""); // 이메일 입력창에 자동입력
      } catch (err) {
        console.error("❌ 사용자 정보 불러오기 실패:", err);
        alert("사용자 정보를 불러오지 못했습니다.");
      }
    };

    fetchUserInfo();
  }, [navigate]);

  // ✅ 문의 등록 함수
  const handleSubmit = async () => {
    if (!email || !selectedOption || !content.trim()) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const categoryEng = categoryMap[selectedOption];
    const token = localStorage.getItem("accessToken");

    const data = {
      email: email,
      category: categoryEng,
      content: content,
    };

    console.log("📤 문의 등록 요청 데이터:", data);

    try {
      const res = await axios.post(
        "https://www.nocap.kr/api/nocap/question",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      console.log("✅ 문의 등록 성공:", res.data);
      alert("문의가 성공적으로 등록되었습니다!");
      navigate("/my/inquiry");
    } catch (err) {
      console.error("❌ 문의 등록 실패:", err);
      alert("문의 등록에 실패했습니다.");
    }
  };

  return (
    <I.Container>
      <I.MobileOnly>
        <I.Header>
          <img
            onClick={goBack}
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
          <div>문의하기</div>
        </I.Header>
      </I.MobileOnly>

      <I.DesktopOnly>
        <I.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <I.Menu>
            <div id="tag" onClick={goMain} style={{ cursor: "pointer" }}>
              홈
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goIntro}>
              NOCAP 소개
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goNews}>
              뉴스
            </div>
            <div id="tag" style={{ cursor: "pointer" }} onClick={goMy}>
              마이페이지
              <div id="circle" />
            </div>
          </I.Menu>
        </I.Head>
      </I.DesktopOnly>

      <I.DesktopOnly>
        <I.Nav>
          <I.NComp style={{ cursor: "pointer" }} onClick={goPre}>
            <img
              src={`${process.env.PUBLIC_URL}/images/premium_n.png`}
              alt="point"
            />
            <div>프리미엄</div>
          </I.NComp>
          <I.NComp onClick={goEdit} style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/edit_n.png`}
              alt="point"
            />
            <div>프로필 수정</div>
          </I.NComp>
          <I.NComp style={{ cursor: "pointer" }} onClick={goPay}>
            <img
              src={`${process.env.PUBLIC_URL}/images/buy_n.png`}
              alt="point"
            />
            <div>구매내역</div>
          </I.NComp>
          <I.NComp style={{ cursor: "pointer" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/inquiry_c.png`}
              alt="point"
            />
            <div>문의하기</div>
          </I.NComp>
        </I.Nav>
      </I.DesktopOnly>

      <I.Box>
        <I.DesktopOnly>
          <I.Up>
            <I.Prof>
              <div>{userInfo.username}님</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.png`}
                alt="profile"
              />
            </I.Prof>
          </I.Up>
        </I.DesktopOnly>

        <I.Body>
          <I.List>
            <I.Comp>
              <div id="title">이름(닉네임)</div>
              <I.Input>
                <div id="username">{userInfo.username || "불러오는 중..."}</div>
              </I.Input>
            </I.Comp>

            {/* ✅ 이메일 input */}
            <I.Comp>
              <div id="title">이메일</div>
              <I.Input>
                <input
                  type="text"
                  placeholder="이메일을 입력하세요."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </I.Input>
            </I.Comp>

            {/* ✅ 드롭다운 */}
            <I.Comp>
              <div id="title">문의내용 분류</div>
              <I.Input onClick={() => setIsOpen(!isOpen)}>
                <input
                  type="text"
                  placeholder="선택 안 함"
                  value={selectedOption}
                  readOnly
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/drop.svg`}
                  alt="drop"
                  style={{ cursor: "pointer" }}
                />
              </I.Input>

              {isOpen && (
                <I.Dropdown>
                  {options.map((option) => (
                    <I.Option key={option} onClick={() => handleSelect(option)}>
                      {option}
                    </I.Option>
                  ))}
                </I.Dropdown>
              )}
            </I.Comp>

            {/* ✅ 문의내용 */}
            <I.Comp>
              <div id="title">문의내용</div>
              <I.Text>
                <textarea
                  id="content"
                  placeholder="문의내용을 입력하세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </I.Text>
            </I.Comp>
          </I.List>
        </I.Body>

        <I.MobileOnly>
          <I.Button onClick={handleSubmit}>등록하기</I.Button>
        </I.MobileOnly>

        <I.DesktopOnly>
          <I.Btn>
            <div id="see" onClick={goBack} style={{ cursor: "pointer" }}>
              문의내역 보기
            </div>
            <div id="go" onClick={handleSubmit} style={{ cursor: "pointer" }}>
              등록하기
            </div>
          </I.Btn>
        </I.DesktopOnly>
      </I.Box>
    </I.Container>
  );
};

export default InquiryDet;
