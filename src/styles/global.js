import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.5s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }
`;