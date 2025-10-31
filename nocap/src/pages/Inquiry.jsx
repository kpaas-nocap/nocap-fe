import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledInquiry";
import axios from "axios";

const Inquiry = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goWrite = () => navigate(`/my/inquiry/write`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goEdit = () => navigate(`/my/edit`);
  const goMy = () => navigate(`/my`);
  const goIntro = () => navigate(`/introduce`);
  const goPre = () => navigate(`/premium`);
  const goPay = () => navigate(`/my/payment`);

  const [inquiries, setInquiries] = useState([]);

  const [username, setUsername] = useState(""); // 사용자 이름
  const [newUsername, setNewUsername] = useState(""); // 수정용 이름 입력값

  // ✅ category 영어 → 한글 변환 맵
  const categoryMap = {
    INQUIRY: "이용문의",
    ACCOUNT: "계정·회원",
    PAYMENT: "결제·환불",
    BUG: "오류·버그",
    RESTRICTION: "기능제안",
    SECURITY: "보안·신고",
    ETC: "기타문의",
  };

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("로그인 토큰이 없습니다.");
          return;
        }

        const res = await axios.get("https://www.nocap.kr/api/nocap/question", {
          headers: { Authorization: `${token}` },
        });

        console.log("📦 문의내역 데이터:", res.data);
        setInquiries(res.data);
      } catch (error) {
        console.error("❌ 문의사항 불러오기 실패:", error);
      }
    };

    fetchInquiries();
  }, []);

  const goCom = (questionId, status) =>
    navigate(`/my/inquiry/comment`, { state: { questionId, status } });

  const formatDate = (isoString) => {
    if (!isoString) return "-";
    const date = new Date(isoString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${yyyy}. ${mm}. ${dd} ${hh}:${min}:${ss}`;
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
      } catch (err) {
        console.error("유저 정보 불러오기 실패:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <I.Container>
      <I.MobileOnly>
        <I.Header>
          <img
            onClick={goBack}
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
          />
          <div>1:1 문의</div>
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
              <div>{username}님</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.png`}
                alt="profile"
              />
            </I.Prof>
            {/* <img
              id="pencil"
              src={`${process.env.PUBLIC_URL}/images/pencil.svg`}
              alt="write"
            /> */}
            <div id="write" onClick={goWrite} style={{ cursor: "pointer" }}>
              새 문의 작성
            </div>
          </I.Up>
        </I.DesktopOnly>

        <I.Body>
          {inquiries.length > 0 ? (
            inquiries.map((item) => (
              <I.Comp key={item.questionId}>
                <I.Element
                  onClick={() => goCom(item.questionId, item.status)}
                  style={{ cursor: "pointer" }}
                >
                  <I.Detail>
                    {/* ✅ 영어 카테고리를 한글로 변환 */}
                    <div id="category">
                      {categoryMap[item.category] || item.category}
                    </div>
                    <div id="title">{item.content || "내용 없음"}</div>
                    <div id="date">작성일 {formatDate(item.createdAt)}</div>
                  </I.Detail>
                  <div id="success">
                    {item.status === "Done" ? "답변완료" : "미답변"}
                  </div>
                </I.Element>
                <I.Hr />
              </I.Comp>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              문의 내역이 없습니다.
            </div>
          )}
        </I.Body>

        <I.MobileOnly>
          <I.Button onClick={goWrite}>새 문의 작성</I.Button>
        </I.MobileOnly>
      </I.Box>
    </I.Container>
  );
};

export default Inquiry;
