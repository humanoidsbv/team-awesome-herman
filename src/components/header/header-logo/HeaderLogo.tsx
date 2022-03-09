import React from "react";

import TeamAwesomeLogo from "../../../../public/assets/icons/team-awesome.svg";

import * as Styled from "./HeaderLogo.styled";

interface HeaderLogoProps {
  isMenuVisible: boolean;
}

export const HeaderLogo = ({ isMenuVisible }: HeaderLogoProps) => {
  return (
    <Styled.HeaderLogo isMenuVisible={isMenuVisible}>
      <TeamAwesomeLogo />
    </Styled.HeaderLogo>
  );
};
