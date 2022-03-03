import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";

import { getTimeEntries } from "../src/services/time-entry-api/get-time-entries";
import { NotFoundError } from "../src/errors/not-found-error";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";
import { StoreProvider } from "../src/providers/StoreProvider";
import { TimeEntryProps } from "../src/types/TimeEntry.types";

export interface InitialTimeEntryProps {
  initialTimeEntries: TimeEntryProps[];
}

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  if (initialTimeEntries instanceof NotFoundError) {
    return;
  }

  return {
    props: {
      initialTimeEntries,
    },
  };
};

const Homepage = ({ initialTimeEntries }: InitialTimeEntryProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <StoreProvider>
          <Header />
          <PageContainer>
            <TimeEntries initialTimeEntries={initialTimeEntries} />
          </PageContainer>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
