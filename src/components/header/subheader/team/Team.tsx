import * as Styled from "../SubHeader.styled";

import { TeamMembers } from "./team-members/TeamMembers";
import { TeamSize } from "./team-size/TeamSize";

export const Team = () => {
  return (
    <Styled.Team>
      <TeamMembers />
      <Styled.Divider>|</Styled.Divider>
      <TeamSize />
    </Styled.Team>
  );
};
