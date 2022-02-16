import React, { useState } from "react";

import { Menu } from "./menu/Menu";
import { HeaderLogo } from "./header-logo/HeaderLogo";
import { MenuButton } from "./menu-button/MenuButton";
import { Profile } from "./profile/Profile";

import * as Styled from "./Topheader.styled";

interface TopheaderProps {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

export const Topheader = ({ isMenuVisible, toggleMenu }: TopheaderProps): React.ReactElement => {
  return (
    <Styled.Topheader isMenuVisible={isMenuVisible}>
      <HeaderLogo />
      <Menu isMenuVisible={isMenuVisible} />
      <Profile />
      <MenuButton isMenuVisible={isMenuVisible} onClick={toggleMenu} />
    </Styled.Topheader>
  );
};
