import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  @font-face {
    font-family: "Bello";
    src: url("../../public/assets/fonts/bello-script.ttf") format("ttf");
  }

  @font-face {
    font-family: "Proxima Nova";
    src: url("../../public/assets/fonts/proxima-nova-regular.ttf") format("ttf");
  }

`;

export default GlobalStyle;
