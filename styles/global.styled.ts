import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Inter;
    src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-weight: 400;
    font-display: swap;
  }

  :root {
    // colors:
    --gray: #EEEEEE;
    --gray-2: #BABABA;
    --black: #000000;
    --white: #ffffff;


    // fonts:
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

  body {
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

export const Container = styled.div<{ maxWidth?: string }>`
  max-width: ${({maxWidth = '722px'}) => maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`


