import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styles/StyledInquiryDet";

const InquiryDet = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // ✅ 드롭다운 상태
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // ✅ 드롭다운 옵션 목록
  const options = [
    "이용문의",
    "계정·회원",
    "결제·환불",
    "오류·버그",
    "기능제안",
    "보안·신고",
    "기타문의",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <I.Container>
      <I.Header>
        <img
          onClick={goBack}
          src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
          alt="back"
        />
        <div>문의하기</div>
      </I.Header>

      <I.Body>
        <I.List>
          <I.Comp>
            <div id="title">이름(닉네임)</div>
            <I.Input>
              <input type="text" placeholder="이름을 입력하세요." />
            </I.Input>
          </I.Comp>
          <I.Comp>
            <div id="title">이메일</div>
            <I.Input>
              <input type="text" placeholder="이메일을 입력하세요." />
            </I.Input>
          </I.Comp>
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

            {/* ✅ 드롭다운 옵션 */}
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
          <I.Comp>
            <div id="title">문의내용</div>
            <I.Text>
              <textarea
                name=""
                id="content"
                placeholder="문의내용을 입력하세요"
              ></textarea>
            </I.Text>
          </I.Comp>
        </I.List>
      </I.Body>

      <I.Button>등록하기</I.Button>
    </I.Container>
  );
};

export default InquiryDet;
