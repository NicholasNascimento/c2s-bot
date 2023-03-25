import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --gray-15: #F5F6F7;
    --gray-25: #E4E8EB;
    --gray-75: #909191;
    --cyan-50: #16BAC5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, span, strong, p {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`