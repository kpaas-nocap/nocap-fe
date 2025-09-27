import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../styles/StyledArticle";
import Rate from "./Rate";

const Article = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goAnal = () => navigate(`/analysis`);
  const goMy = () => navigate(`/my`);
  const goMain = () => navigate(`/`);
  const goNews = () => navigate(`/news`);

  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("new"); // ✅ 기본값은 'new'
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  // ✅ textarea 변경 시 실행
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setText(value);
    }
  };

  return (
    <A.Container>
      <A.MobileOnly>
        <A.Header>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
            alt="back"
            onClick={goBack}
          />
          <img
            id="bookmark"
            src={`${process.env.PUBLIC_URL}/images/${
              bookmarked ? "bookmark_b.svg" : "bookmark.svg"
            }`}
            alt="bookmark"
            onClick={toggleBookmark}
            style={{ cursor: "pointer" }}
          />
        </A.Header>
        <A.Hr />
      </A.MobileOnly>

      <A.DesktopOnly>
        <A.Head>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            id="logo"
          />
          <A.Menu>
            <div id="tag" onClick={goMain} title="메인 페이지로 이동">
              홈
            </div>
            <div id="tag" title="NOCAP 서비스 소개">
              NOCAP 소개
            </div>
            <div id="tag" title="최신 뉴스 보기" onClick={goNews}>
              뉴스
              <div id="circle" />
            </div>
            <div id="tag" onClick={goAnal} title="뉴스 기사 분석하러 가기">
              기사분석
            </div>
            <div id="tag" onClick={goMy} title="마이 페이지로 이동">
              마이페이지
            </div>
          </A.Menu>
        </A.Head>
      </A.DesktopOnly>

      <A.MobileOnly>
        <A.Body>
          <A.Up>
            <A.Category>IT/과학</A.Category>
            <A.Title>
              폐배터리 재생원료 인증사업 추진… 재활용 공정과정 검증
            </A.Title>
            <A.Date>2024. 03. 26</A.Date>
          </A.Up>
          <A.Img>
            <img src={`${process.env.PUBLIC_URL}/images/news.jpg`} alt="news" />
            <A.Exp>재생원료 인증 시범사업 추진(안)</A.Exp>
          </A.Img>

          {/* ✅ Content + Gradient */}
          <A.ContentWrapper>
            <A.Content expanded={expanded}>
              [에너지플랫폼뉴스 송승온 기자] 정부가 ‘전기차 폐배터리 재생원료
              인증 시범사업’을 통해 인증제도 마련 및 관련 제도 개선을 추진한다.
              환경부는 26일 엘더블유(LW)컨벤션센터에서 5개 전기차 폐배터리
              재활용 기업과 함께 전기차 폐배터리 재생원료 인증 시범사업 추진
              협약을 체결했다고 밝혔다. 이날 협약식에는 한화진 환경부 장관,
              이강명 성일하이텍 대표, 박석회 에코프로씨엔지 대표, 임지우
              포스코에이치와이(HY)클린메탈 대표, 박경일 에스케이(SK)에코플랜트
              대표, 박용한 에너지머티리얼즈 상무, 정재웅 한국환경공단 이사가
              참석했다. 유럽연합(EU) 등 주요 선진국은 탄소중립 실현을 위해
              제품을 생산할 때 재생원료 사용을 의무화하고 있다. 특히 폐배터리를
              재활용해 재생원료를 생산하면 대부분 수입에 의존하는 니켈, 코발트
              등의 핵심광물을 안정적으로 공급하고 순환경제 실현에도 기여할 수
              있다.
            </A.Content>
            <A.GradientOverlay expanded={expanded} />
          </A.ContentWrapper>

          {/* ✅ 버튼 (펼쳐지면 사라짐) */}
          {!expanded && (
            <A.Button onClick={() => setExpanded(true)}>기사 본문보기</A.Button>
          )}
        </A.Body>

        <A.Related>
          <A.RTitle>관련기사</A.RTitle>
          <A.List>
            <A.Mass>
              <A.Component>
                <A.Text>
                  <A.ATitle>
                    환경부,전기차 폐배터리 재생원료 인증 시범사업 추진
                  </A.ATitle>
                  <A.ACC>신소재경제</A.ACC>
                  <A.ADate>2024. 03. 27</A.ADate>
                </A.Text>
                <A.Rate>
                  <Rate percent={75} /> {/* <- 원하는 퍼센트 값 넣으면 됨 */}
                </A.Rate>
              </A.Component>

              {/* Go 버튼 (펼쳐지면 사라짐) */}
              {!isOpen && (
                <A.Go onClick={() => setIsOpen(true)}>
                  펼쳐서 비교요약 보기
                </A.Go>
              )}

              {/* 비교 요약 박스 */}
              <A.Dropdown expanded={isOpen}>
                <A.DropTitle>메인 기사와 비교 요약</A.DropTitle>
                <ul>
                  <li>
                    두 기사 모두 환경부가 전기차 폐배터리 재생원료 인증
                    시범사업을 추진한다고 보도
                  </li>
                  <li>참여 기업들과의 협약 체결 소식 포함</li>
                  <li>
                    메인 기사에는 ‘올바로 시스템’ 활용한 재생원료 추출 과정 검증
                    내용 언급
                  </li>
                  <li>비교 기사에는 해당 내용 없음</li>
                </ul>
              </A.Dropdown>
            </A.Mass>
          </A.List>
          <A.Hr />

          <A.Comment>
            <A.Detail>
              <div id="num">3</div>
              <div id="detail">개의 댓글</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/refresh.svg`}
                alt="refresh"
                onClick={() => window.location.reload()} // ✅ 페이지 전체 새로고침
              />
            </A.Detail>
          </A.Comment>

          <A.Input>
            <A.Profile>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.png`}
                alt="profile"
              />
              <div>홍**</div>
            </A.Profile>
            <A.TextArea>
              <textarea
                value={text}
                onChange={handleChange}
                placeholder="다양한 의견이 서로 존중될 수 있도록 다른 사람에게 불쾌감을 주는 욕설, 혐오, 비하의 표현이나 타인의 권리를 침해하는 내용은 주의해 주세요. 모든 작성자는 본인이 작성한 의견에 대해 법적 책임을 갖는다는 점 유의하시기 바랍니다."
              ></textarea>
            </A.TextArea>
            <A.IHr />
            <A.Down>
              <A.Char>
                <div id="now">{text.length} </div>
                <div id="max"> / 200</div>
              </A.Char>

              <A.Btn
                active={text.length > 0} // ✅ 스타일링 조건
              >
                등록
              </A.Btn>
            </A.Down>
          </A.Input>

          <A.Sort>
            <div
              id="new"
              style={{
                fontWeight: selected === "new" ? 600 : 400,
                cursor: "pointer",
              }}
              onClick={() => setSelected("new")}
            >
              최신순
            </div>

            <div
              id="up"
              style={{
                fontWeight: selected === "up" ? 600 : 400,
                cursor: "pointer",
              }}
              onClick={() => setSelected("up")}
            >
              공감순
            </div>
          </A.Sort>

          <A.Hr />

          <A.RList>
            <A.Comp>
              <A.Profile>
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile.png`}
                  alt="profile"
                />
                <A.Small>
                  <div id="username">홍**</div>
                  <div id="date">2025.05.09</div>
                </A.Small>
              </A.Profile>

              <A.CDet>
                댓글내용
                <br />
                두줄
              </A.CDet>

              <A.Icon>
                <A.Decl>
                  <div>신고</div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/declaration.svg`}
                    alt="declaration"
                  />
                </A.Decl>
                <A.Thumb>
                  <A.TUp>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/good.svg`}
                      alt="good"
                    />
                    <div>0</div>
                  </A.TUp>
                  <A.TUp>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/bad.svg`}
                      alt="good"
                    />
                    <div>0</div>
                  </A.TUp>
                </A.Thumb>
              </A.Icon>
              <A.Hr />
            </A.Comp>
          </A.RList>
        </A.Related>
      </A.MobileOnly>

      <A.DesktopOnly>
        <A.Layout>
          <A.LeftPannel>
            <A.Body>
              <A.Up>
                <A.Category>IT/과학</A.Category>
                <A.Title>
                  폐배터리 재생원료 인증사업 추진… 재활용 공정과정 검증
                </A.Title>
                <A.Date>2024. 03. 26</A.Date>
              </A.Up>
              <A.Img>
                <img
                  src={`${process.env.PUBLIC_URL}/images/news.jpg`}
                  alt="news"
                />
                <A.Exp>재생원료 인증 시범사업 추진(안)</A.Exp>
              </A.Img>

              {/* ✅ Content + Gradient */}
              <A.ContentWrapper>
                <A.Content expanded={expanded}>
                  [에너지플랫폼뉴스 송승온 기자] 정부가 ‘전기차 폐배터리
                  재생원료 인증 시범사업’을 통해 인증제도 마련 및 관련 제도
                  개선을 추진한다. 환경부는 26일 엘더블유(LW)컨벤션센터에서 5개
                  전기차 폐배터리 재활용 기업과 함께 전기차 폐배터리 재생원료
                  인증 시범사업 추진 협약을 체결했다고 밝혔다. 이날 협약식에는
                  한화진 환경부 장관, 이강명 성일하이텍 대표, 박석회
                  에코프로씨엔지 대표, 임지우 포스코에이치와이(HY)클린메탈 대표,
                  박경일 에스케이(SK)에코플랜트 대표, 박용한 에너지머티리얼즈
                  상무, 정재웅 한국환경공단 이사가 참석했다. 유럽연합(EU) 등
                  주요 선진국은 탄소중립 실현을 위해 제품을 생산할 때 재생원료
                  사용을 의무화하고 있다. 특히 폐배터리를 재활용해 재생원료를
                  생산하면 대부분 수입에 의존하는 니켈, 코발트 등의 핵심광물을
                  안정적으로 공급하고 순환경제 실현에도 기여할 수 있다.
                </A.Content>
                <A.GradientOverlay expanded={expanded} />
              </A.ContentWrapper>

              {/* ✅ 버튼 (펼쳐지면 사라짐) */}
              {!expanded && (
                <A.Button onClick={() => setExpanded(true)}>
                  기사 본문보기
                </A.Button>
              )}
            </A.Body>

            <A.Related>
              <A.Comment>
                <A.Detail>
                  <div id="num">3</div>
                  <div id="detail">개의 댓글</div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/refresh.svg`}
                    alt="refresh"
                    onClick={() => window.location.reload()} // ✅ 페이지 전체 새로고침
                  />
                </A.Detail>
              </A.Comment>

              <A.Input>
                <A.Profile>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/profile.png`}
                    alt="profile"
                  />
                  <div>홍**</div>
                </A.Profile>
                <A.TextArea>
                  <textarea
                    value={text}
                    onChange={handleChange}
                    placeholder="다양한 의견이 서로 존중될 수 있도록 다른 사람에게 불쾌감을 주는 욕설, 혐오, 비하의 표현이나 타인의 권리를 침해하는 내용은 주의해 주세요. 모든 작성자는 본인이 작성한 의견에 대해 법적 책임을 갖는다는 점 유의하시기 바랍니다."
                  ></textarea>
                </A.TextArea>
                <A.IHr />
                <A.Down>
                  <A.Char>
                    <div id="now">{text.length} </div>
                    <div id="max"> / 200</div>
                  </A.Char>

                  <A.Btn
                    active={text.length > 0} // ✅ 스타일링 조건
                  >
                    등록
                  </A.Btn>
                </A.Down>
              </A.Input>

              <A.Sort>
                <div
                  id="new"
                  style={{
                    fontWeight: selected === "new" ? 600 : 400,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected("new")}
                >
                  최신순
                </div>

                <div
                  id="up"
                  style={{
                    fontWeight: selected === "up" ? 600 : 400,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected("up")}
                >
                  공감순
                </div>
              </A.Sort>

              <A.AHr />

              <A.RList>
                <A.Comp>
                  <A.Small>
                    <div id="username">홍**</div>
                    <div id="date">2025.05.09</div>
                  </A.Small>

                  <A.CDet>
                    댓글내용
                    <br />
                    두줄
                  </A.CDet>
                  <A.Icon>
                    <A.Decl>
                      <div>신고</div>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/declaration.svg`}
                        alt="declaration"
                      />
                    </A.Decl>
                    <A.Thumb>
                      <A.TUp>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/good.svg`}
                          alt="good"
                        />
                        <div>0</div>
                      </A.TUp>
                      <A.TUp>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/bad.svg`}
                          alt="good"
                        />
                        <div>0</div>
                      </A.TUp>
                    </A.Thumb>
                  </A.Icon>
                  <A.AHr />
                </A.Comp>
              </A.RList>
            </A.Related>
          </A.LeftPannel>

          <A.RightPannel>
            <A.RTitle>관련기사</A.RTitle>
            <A.List>
              <A.Mass>
                <A.Component>
                  <A.Text>
                    <A.ATitle>
                      환경부,전기차 폐배터리 재생원료 인증 시범사업 추진
                    </A.ATitle>
                    <A.ACC>신소재경제</A.ACC>
                    <A.ADate>2024. 03. 27</A.ADate>
                  </A.Text>
                  <A.Rate>
                    <Rate percent={75} /> {/* <- 원하는 퍼센트 값 넣으면 됨 */}
                  </A.Rate>
                </A.Component>

                {/* Go 버튼 (펼쳐지면 사라짐) */}
                {!isOpen && (
                  <A.Go onClick={() => setIsOpen(true)}>
                    펼쳐서 비교요약 보기
                  </A.Go>
                )}

                {/* 비교 요약 박스 */}
                <A.Dropdown expanded={isOpen}>
                  <A.DropTitle>메인 기사와 비교 요약</A.DropTitle>
                  <ul>
                    <li>
                      두 기사 모두 환경부가 전기차 폐배터리 재생원료 인증
                      시범사업을 추진한다고 보도
                    </li>
                    <li>참여 기업들과의 협약 체결 소식 포함</li>
                    <li>
                      메인 기사에는 ‘올바로 시스템’ 활용한 재생원료 추출 과정
                      검증 내용 언급
                    </li>
                    <li>비교 기사에는 해당 내용 없음</li>
                  </ul>
                </A.Dropdown>
              </A.Mass>
            </A.List>
          </A.RightPannel>
        </A.Layout>
      </A.DesktopOnly>
    </A.Container>
  );
};

export default Article;
