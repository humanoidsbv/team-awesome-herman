import { gql } from "@apollo/client";
import client from "../apollo-client";

import { Header } from "../src/components/header/Header";
// import { NotFoundError } from "../src/errors/not-found-error";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TeamMemberProps } from "../src/types/TeamMember.types";
import { TeamMembers } from "../src/components/team-members/TeamMembers";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetData {
        allTeamMembers {
          firstName
          lastName
          emailAddress
          label
          client
          role
          startingDate
          id
        }
      }
    `,
  });

  return {
    props: {
      initialTeamMembers: data.allTeamMembers,
    },
  };
};

export interface InitialTeamMembersProps {
  initialTeamMembers: TeamMemberProps[];
}

const Homepage = ({ initialTeamMembers }: InitialTeamMembersProps) => {
  return (
    <>
      <Header />
      <PageContainer>
        <TeamMembers initialTeamMembers={initialTeamMembers} />
      </PageContainer>
    </>
  );
};

export default Homepage;
