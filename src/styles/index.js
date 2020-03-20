import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Rubik', sans-serif;
  }

  body {
    padding: 20px;
    height: 100vh;
    background-color: #DCD9D4; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

export const colors = {
  primary: "#FF6347",
  secondary: "#6347ff",
  auxiliar: "#ff4787",
  dark: "#110111",
  lighter: "#fff",
  grey: "#ccc"
};

export default GlobalStyles;
