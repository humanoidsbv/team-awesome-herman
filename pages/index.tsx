import { Header } from "../src/components/header/Header";
import { Main } from "../src/components/main/Main";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
