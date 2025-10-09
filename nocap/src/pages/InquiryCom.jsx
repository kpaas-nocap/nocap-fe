import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as I from "../styles/StyledInqCom";
import axios from "axios";

const InquiryCom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => navigate(-1);
  const goWrite = () => navigate(`/my/inquiry/write`);

  // ✅ Inquiry 페이지에서 넘겨받은 값
  const { questionId, status } = location.state || {};

  const [inquiry, setInquiry] = useState(null);

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
        {inquiry ? (
          <I.Comp>
            <I.Element>
              <I.Up>
                <div id="suc">{status === "Done" ? "답변완료" : "미답변"}</div>
                {/* ✅ 카테고리 한글로 표시 */}
                <div id="cate">
                  {categoryMap[inquiry.category] || inquiry.category}
                </div>
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

                <div id="date">{formatDate(inquiry.createdAt)}</div>
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

      <I.Button onClick={goWrite}>새 문의 작성</I.Button>
    </I.Container>
  );
};

export default InquiryCom;
