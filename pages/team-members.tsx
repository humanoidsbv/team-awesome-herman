import { client } from "../apollo-client";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TeamMemberProps } from "../src/types/TeamMember.types";
import { TeamMembers } from "../src/components/team-members/TeamMembers";

import { GET_TEAM_MEMBERS } from "../src/services/queries";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TEAM_MEMBERS,
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
