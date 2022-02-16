import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/shared/PageContainer";
import { Daysheet } from "../src/components/timesheet/Daysheet";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <Header />
        <PageContainer>
          <Daysheet />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
