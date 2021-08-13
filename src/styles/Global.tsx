import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #eaeded;
    --bg-accent: #ffffff;
    --bg-accent-secondary: #f3f3f3;
    
    --nav: #131921;
    --subnav: #232f3e;

    --star: #ffa41c;

    --brand: #febd69;

    --text: #ffffff;
    --text-blue: #378f9f;
    --text-red: #b12704;
    --text-blue-secondary: #00a3da;
    --text-dark: #0F1111;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  *, input, button {
    background: none;

    outline: none;
    border: none;

    font-family: "Lato", sans-serif;

    color: var(--text);
  }

  html, body, #root {
    background-color: var(--bg);

    font-size: 16px;
  }

  a {
    text-decoration: none;
  }
`;