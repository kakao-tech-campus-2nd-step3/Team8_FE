import { extendTheme } from '@chakra-ui/react';

const GlobalTheme = extendTheme({
  // Font Family 선언
  fonts: {
    body: `'Pretendard-Regular', sans-serif`,
  },
  colors: {
    /**
     * Global Color 선언
     * 사용 : 'color.색상이름'
     */
    color: {
      basic: '#2e2e2e',
      white: '#fff',
      gray: '#909090',
      primary: '#C69090',
      secondary: '#F6E4E4',
      whiteGray: '#F2F2F2',
    },
  },
  styles: {
    // Global Font Face 선언
    global: {
      '@font-face': {
        fontFamily: 'Pretendard-Regular',
        src: `url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')`,
        fontWeight: '400, 700, 900',
        fontStyle: 'normal',
      },
    },
  },
});

export default GlobalTheme;
