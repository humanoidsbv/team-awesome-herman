import TeamAwesomeLogo from "../../../../public/assets/icons/team-awesome.svg";

import * as Styled from "./HeaderLogo.styled";

export const HeaderLogo = (): React.ReactElement => {
  return (
    <Styled.Container>
      <TeamAwesomeLogo />
    </Styled.Container>
  );
};
