import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  @font-face {
    font-family: "Bello";
    src: url("assets/") format("ttf")
  }

`;

export default GlobalStyle;
