import * as Styled from "./Profile.styled";
import HumanoidsLogo from "../../../../../public/assets/icons/humanoids_logo.svg";
import DropdownArrow from "../../../../../public/assets/icons/Arrow-down.svg";

export const Profile = (): React.ReactElement => {
  return (
    <Styled.Profile>
      <Styled.ProfileButton>
        <HumanoidsLogo />
        <Styled.Avatar></Styled.Avatar>
      </Styled.ProfileButton>
      <Styled.DropdownArrow>
        <DropdownArrow fill="#ffffff" />
      </Styled.DropdownArrow>
    </Styled.Profile>
  );
};
