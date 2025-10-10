import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as I from "../styles/StyledInqCom";
import axios from "axios";

const InquiryCom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => navigate(-1);
  const goWrite = () => navigate(`/my/inquiry/write`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);
  const goMy = () => navigate(`/my`);
  const goEdit = () => navigate(`/my/eidt`);

  // ✅ Inquiry 페이지에서 넘겨받은 값
  const { questionId, status } = location.state || {};

  const [inquiry, setInquiry] = useState(null);

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

  const formatDate = (isoString) => {
    if (!isoString) return "-";
    const date = new Date(isoString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}. ${mm}. ${dd}`;
  };

  useEffect(() => {
    console.log("✅ 전달받은 status:", status);

    const fetchInquiryDetail = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        const res = await axios.get(
          `https://www.nocap.kr/api/nocap/question/${questionId}`,
          {
            headers: { Authorization: `${token}` },
          }
        );

        setInquiry(res.data);
      } catch (error) {
        console.error("문의 상세 불러오기 실패:", error);
      }
    };

    if (questionId) fetchInquiryDetail();
  }, [questionId]);

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
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기" onClick={goNews}>
              뉴스
            </div>
            <div id="tag">
              마이페이지
              <div id="circle" />
            </div>
          </I.Menu>
        </I.Head>
      </I.DesktopOnly>

      <I.DesktopOnly>
        <I.Nav>
          <I.NComp onClick={goMy}>
            <img
              src={`${process.env.PUBLIC_URL}/images/point_n.png`}
              alt="point"
            />
            <div>내 포인트</div>
          </I.NComp>
          <I.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/premium_n.png`}
              alt="point"
            />
            <div>프리미엄</div>
          </I.NComp>
          <I.NComp onClick={goEdit}>
            <img
              src={`${process.env.PUBLIC_URL}/images/edit_n.png`}
              alt="point"
            />
            <div>프로필 수정</div>
          </I.NComp>
          <I.NComp>
            <img
              src={`${process.env.PUBLIC_URL}/images/buy_n.png`}
              alt="point"
            />
            <div>구매내역</div>
          </I.NComp>
          <I.NComp>
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
          <I.Up1>
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
            <div id="write" onClick={goWrite}>
              새 문의 작성
            </div>
          </I.Up1>
        </I.DesktopOnly>

        <I.Body>
          {inquiry ? (
            <I.Comp>
              <I.Element>
                <I.Up>
                  <I.U>
                    <div id="suc">
                      {status === "Done" ? "답변완료" : "미답변"}
                    </div>
                    {/* ✅ 카테고리 한글로 표시 */}
                    <div id="cate">
                      {categoryMap[inquiry.category] || inquiry.category}
                    </div>
                  </I.U>
                  <I.DesktopOnly>
                    <I.D>{formatDate(inquiry.createdAt)}</I.D>
                  </I.DesktopOnly>
                </I.Up>

                <I.Down>
                  <I.Q>
                    <div id="id">Q</div>
                    <div id="content">
                      {inquiry.content || "문의 내용이 없습니다."}
                    </div>
                  </I.Q>

                  <I.A>
                    <div id="id">A</div>
                    <div id="content">
                      {inquiry.answer
                        ? inquiry.answer
                        : "아직 답변이 등록되지 않았습니다."}
                    </div>
                  </I.A>

                  <div id="date">{formatDate(inquiry.answeredAt)}</div>
                </I.Down>
              </I.Element>

              <I.Hr />
            </I.Comp>
          ) : (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              문의 상세 정보를 불러오는 중입니다...
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

export default InquiryCom;
