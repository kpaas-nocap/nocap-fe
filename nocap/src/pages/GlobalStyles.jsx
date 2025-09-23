// /mnt/data/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/pretendard/Pretendard-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: 'Pretendard Variable', sans-serif;
    color: #999;
    font-weight: 400;
  }

  body {
    background-color: #f0f0f0;
    overflow-x: hidden;
  }

  html, body {
    height: 100%;
  }
    
  #root {
  width: 100%;
  max-width: 402px;
  margin: 0 auto; /* ✅ 중앙 정렬 */
  height: 100%;
}
`;

export default GlobalStyle;
