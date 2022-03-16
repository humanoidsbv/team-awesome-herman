import client from "../apollo-client";

import { Header } from "../src/components/header/Header";

import { ClientProps } from "../src/types/Client.types";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import { TimeEntryProps } from "../src/types/TimeEntry.types";

import { GET_TIME_ENTRIES } from "../src/services/queries";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TIME_ENTRIES,
  });

  return {
    props: {
      clients: data.allClients,
      initialTimeEntries: data.allTimeEntries,
    },
  };
};

interface HomePageProps {
  initialTimeEntries: TimeEntryProps[];
  clients: ClientProps[];
}

const Homepage = ({ initialTimeEntries, clients }: HomePageProps) => {
  return (
    <>
      <Header />
      <PageContainer>
        <TimeEntries initialTimeEntries={initialTimeEntries} clients={clients} />
      </PageContainer>
    </>
  );
};

export default Homepage;
