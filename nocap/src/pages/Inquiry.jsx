import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledInquiry";
import axios from "axios";

const Inquiry = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goWrite = () => navigate(`/my/inquiry/write`);

  const [inquiries, setInquiries] = useState([]);

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

  return (
    <I.Container>
      <I.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>1:1 문의</div>
      </I.Header>

      <I.Body>
        {inquiries.length > 0 ? (
          inquiries.map((item) => (
            <I.Comp key={item.questionId}>
              <I.Element onClick={() => goCom(item.questionId, item.status)}>
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

      <I.Button onClick={goWrite}>새 문의 작성</I.Button>
    </I.Container>
  );
};

export default Inquiry;
