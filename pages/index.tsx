import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { getTimeEntries } from "../src/services/time-entry-api/get-time-entries";
import { NotFoundError } from "../src/errors/not-found-error";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";
import { StoreProvider } from "../src/components/providers/StoreProvider";

export const getServerSideProps = async () => {
  const timeEntries = await getTimeEntries();

  if (timeEntries instanceof NotFoundError) {
    return;
  }

  return {
    props: {
      timeEntries,
    },
  };
};

const Homepage = ({ timeEntries }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <StoreProvider>
          <Header />
          <PageContainer>
            <TimeEntries timeEntries={timeEntries} />
          </PageContainer>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
