import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/reusable-UI/PageContainer";
import { Timesheet } from "../src/components/reusable-UI/Timesheet";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

const Homepage = () => {
  const timeEntry = {
    client: "Heineken",
    startTime: "09:00",
    stopTime: "17:00",
  };

  const timeEntries = [
    {
      client: "Heineken",
      startTime: "09:00",
      stopTime: "17:00",
      date: "16-04-2021",
    },
    {
      client: "Port of Rotterdam",
      startTime: "09:00",
      stopTime: "17:00",
      date: "17-04-2021",
    },
  ];

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
