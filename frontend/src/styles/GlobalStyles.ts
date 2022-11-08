import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
      font-size: 10px;
    }
    body {
        font-family: 'Noto Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1.5em;
        letter-spacing: 0.025em;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        height: 100vh;
        width: 100vw;
    }
    button, input, select, textarea {
        font-family : inherit;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
  `;
