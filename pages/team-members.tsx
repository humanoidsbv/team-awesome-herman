import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { PageContainer } from "../src/components/shared/PageContainer";
import { TeamMembers } from "../src/components/team-members/TeamMembers";

import { NotFoundError } from "../src/errors/not-found-error";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

import { StoreProvider } from "../src/providers/StoreProvider";

import { TeamMemberProps } from "../src/types/TeamMember.types";

import { getTeamMembers } from "../src/services/team-member-api/get-team-members";

export interface InitialTeamMembersProps {
  initialTeamMembers: TeamMemberProps[];
}

export const getServerSideProps = async () => {
  const initialTeamMembers = await getTeamMembers();

  if (initialTeamMembers instanceof NotFoundError) {
    return;
  }

  return {
    props: {
      initialTeamMembers,
    },
  };
};

const Homepage = ({ initialTeamMembers }: InitialTeamMembersProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <StoreProvider>
          <Header />
          <PageContainer>
            <TeamMembers initialTeamMembers={initialTeamMembers} />
          </PageContainer>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
