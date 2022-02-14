import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
