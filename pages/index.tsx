import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/shared/PageContainer";
import { Timesheet } from "../src/components/timesheet/Timesheet";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
        <PageContainer>
          <Timesheet />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
