import { css } from '@emotion/react';
import CookieRun from '@/assets/fonts/CookieRun-Regular.woff';

const globalStyle = css`
  @font-face {
    font-family: 'cookierun';
    src: url(${CookieRun}) format('woff');
  }
  html,
  body {
    font-family: 'cookierun';
  }
`;

export default globalStyle;
