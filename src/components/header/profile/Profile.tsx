import DropdownArrow from "../../../../public/assets/icons/Arrow-down.svg";
import HumanoidsLogo from "../../../../public/assets/icons/humanoids-logo.svg";

import * as Styled from "./Profile.styled";

export const Profile = () => {
  return (
    <Styled.Profile>
      <Styled.ProfileButton>
        <HumanoidsLogo />
        <Styled.Avatar />
      </Styled.ProfileButton>
      <Styled.DropdownArrow>
        <DropdownArrow fill="#ffffff" />
      </Styled.DropdownArrow>
    </Styled.Profile>
  );
};
