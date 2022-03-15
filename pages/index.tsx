import { gql } from "@apollo/client";
import client from "../apollo-client";

import { Header } from "../src/components/header/Header";
// import { NotFoundError } from "../src/errors/not-found-error";
import { ClientProps } from "../src/types/Client.types";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import { TimeEntryProps } from "../src/types/TimeEntry.types";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetData {
        allTimeEntries {
          client
          id
          activity
          startTimestamp
          stopTimestamp
        }
        allClients {
          id
          name
        }
      }
    `,
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
