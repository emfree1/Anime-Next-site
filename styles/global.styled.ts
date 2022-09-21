import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Inter;
    src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-weight: 400;
    font-display: swap;
  }

  :root {
    // colors:
    --black: #000000;
    --white: #ffffff;
    --gray: #EEEEEE;
    --gray-2: #BABABA;
    --gray-3: #929292;
    --gray-4: #5A5A5A;
    --gray-5: #EBEBEB;
    --gray-6: #B4B4B4;
    --gray-7: #757575;
    --gray-8: #A7A7A7;
    --gray-9: #D9D9D9;
    --gray-10: #B9B9B9;
    --border-color: #DDDDDD;
    --layout-height: 164px;
    --font-default: 'Inter', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-default);
  }

  html {
    scroll-behavior: smooth;
  }


  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

export const Container = styled.div<{ maxWidth?: string }>`
  max-width: ${({ maxWidth = '722px' }) => maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;
