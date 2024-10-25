import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXXl = '1.5rem'; // 24px
const fontSizeXl = '1.25rem'; // 20px
const fontSizeLg = '1.175rem'; // 18px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

// Global Color 정의
const colorBlack = '#2e2e2e';
const colorWhite = '#FFFFFF';
const colorGray = '#909090';
const colorPrimary = '#C69090';
const colorSecondary = '#F6E4E4';
const colorWhiteGray = '#F2F2F2';

// Global Style 정의
export const globalStyle = css`
  :root {
    --font-size-xxl: ${fontSizeXXl};
    --font-size-xl: ${fontSizeXl};
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};

    --color-black: ${colorBlack};
    --color-white: ${colorWhite};
    --color-gray: ${colorGray};
    --color-primary: ${colorPrimary};
    --color-secondary: ${colorSecondary};
    --color-white-gray: ${colorWhiteGray};
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular', 'Apple SD Gothic Neo', sans-serif;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    position: relative;
  }

  // 모바일 너비 적용
  @media (min-width: 768px) {
    body {
      width: 480px;
    }
  }
`;
