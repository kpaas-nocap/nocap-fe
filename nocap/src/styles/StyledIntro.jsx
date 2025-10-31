import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100dvh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    max-width: 100%; /* ✅ PC에서 화면이 꽉 차게 */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fafbff;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px 0 75px;
  height: 100px;

  #logo {
    width: 188px;
  }
`;

export const Menu = styled.div`
  width: 800px;
  // height: 22px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 120px;

  #tag {
    margin-top: 16px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    display: flex;

    #circle {
      margin-top: -3px;
      margin-left: 108px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 317px;
  flex-shrink: 0;
  background: #6277ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    margin-top: auto;
    margin-left: 150px;
    width: 181px;
    height: 270px;
    flex-shrink: 0;
    aspect-ratio: 181/270;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
    object-position: top; /* 👈 이미지의 윗부분부터 보이게 설정 */
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  #detail {
    color: #fff;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #title {
    margin-left: 12px;
    margin-bottom: -5px; /* 👈 title만 5px 내려감 */
    color: #fff;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Why = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 65px;

  #simple {
    color: #000;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
  }

  #bold {
    margin-left: 8px;
    color: #000;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.6px;
  }
`;

export const Draw = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  img {
    width: 38.93px;
    height: 97.2px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 60px;
`;

export const Comp = styled.div`
  width: 367.439px;
  height: 315.276px;
  flex-shrink: 0;
  border-radius: 23.013px;
  border: 0.767px solid #000;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  #tape {
    width: 26.848px;
    height: 53.313px;
    flex-shrink: 0;
    margin-top: -26px;
  }
`;

export const Graph = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2px;
  margin-top: 25px;

  #graph {
    width: 88.983px;
    height: 88.983px;
    flex-shrink: 0;
  }

  #detail {
    width: 54.848px;
    height: 22.246px;
    flex-shrink: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 56px;
`;

export const Text1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  #black {
    color: #000;
    font-family: Pretendard;
    font-size: 19.177px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.314px; /* 132% */
    letter-spacing: 0.384px;
  }

  #blue {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 19.177px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.314px;
    letter-spacing: 0.384px;
  }
`;

export const Source = styled.div`
  color: #b9b9b9;
  text-align: center;
  font-family: Pretendard;
  font-size: 12.169px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: auto;
  margin-bottom: 30px;
`;

export const T1 = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 19.177px;
  font-style: normal;
  font-weight: 600;
  line-height: 29.917px; /* 156% */
  letter-spacing: 0.384px;
  margin-top: 20px;
`;

export const T2 = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 19.177px;
  font-style: normal;
  font-weight: 600;
  line-height: 29.917px; /* 156% */
  letter-spacing: 0.384px;
  margin-top: 35px;
`;

export const B1 = styled.div`
  width: 333.687px;
  height: 108.928px;
  flex-shrink: 0;
  background-color: #f6f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 19px;

  .text {
    color: #353535;
    font-family: Pretendard;
    font-size: 12.274px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.479px; /* 175% */
    letter-spacing: 0.245px;
  }

  .blue {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 12.274px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.479px;
    letter-spacing: 0.245px;
  }
`;

export const B2 = styled.div`
  width: 333.687px;
  height: 90.517px;
  flex-shrink: 0;
  margin-top: 40px;
  background-color: #f6f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  .text {
    color: #353535;
    font-family: Pretendard;
    font-size: 12.274px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.479px; /* 175% */
    letter-spacing: 0.245px;
  }

  .blue {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 12.274px;
    font-style: normal;
    font-weight: 500;
    line-height: 21.479px;
    letter-spacing: 0.245px;
  }
`;

export const Need = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  #black {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.5px;
  }

  #blue {
    margin: 0 5px;
    color: #213ce9;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
  }
`;

export const Image = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  // justify-content: space-between;
  width: 620px;

  img {
    width: 300px;
  }
`;

export const Typing = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  width: 300px;

  #title {
    width: 210px;
    text-align: left;
    color: #353535;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.245px;
  }

  #detail {
    width: 210px;
    text-align: left;
    color: #686868;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.245px;
  }
`;

export const Slo = styled.div`
  margin-top: 250px;
  display: flex;
  text-align: center;
  color: #353535;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.245px;
`;

export const Go = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 300px;

  #emo {
    display: flex;
    color: #353535;
    font-family: Pretendard;
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.245px;
  }

  .detail {
    margin-top: 15px;
    display: flex;
    color: #000;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.6px;
  }

  .blue {
    // margin-top: 15px;
    margin: 0 8px;
    display: flex;
    color: #213ce9;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.6px;
  }
`;
