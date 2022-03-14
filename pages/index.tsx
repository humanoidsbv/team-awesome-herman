import { ThemeProvider } from "styled-components";

import { ClientProps } from "../src/types/Client.types";
import { getClients } from "../src/services/clients-api/get-clients";
import { getTimeEntries } from "../src/services/time-entry-api/get-time-entries";
import { Header } from "../src/components/header/Header";
import { NotFoundError } from "../src/errors/not-found-error";
import { PageContainer } from "../src/components/shared/PageContainer";
import { StoreProvider } from "../src/providers/StoreProvider";
import { theme } from "../src/styles/theme";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import { TimeEntryProps } from "../src/types/TimeEntry.types";
import GlobalStyle from "../src/styles/global";

interface HomepageProps {
  initialTimeEntries: TimeEntryProps[];
  clients: ClientProps[];
}

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();
  const clients = await getClients();

  if (initialTimeEntries instanceof NotFoundError) {
    return {};
  }

  return {
    props: {
      clients,
      initialTimeEntries,
    },
  };
};

const Homepage = ({ initialTimeEntries, clients }: HomepageProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <StoreProvider>
          <Header />
          <PageContainer>
            <TimeEntries initialTimeEntries={initialTimeEntries} clients={clients} />
          </PageContainer>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
