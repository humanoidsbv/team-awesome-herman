import React, { useState } from "react";

import { Menu } from "./menu/Menu";
import { HeaderLogo } from "./header-logo/HeaderLogo";
import { MenuButton } from "./menu-button/MenuButton";
import { Profile } from "./profile/Profile";

import * as Styled from "./TopHeader.styled";

interface TopHeaderProps {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

export const TopHeader = ({ isMenuVisible, toggleMenu }: TopHeaderProps): React.ReactElement => {
  return (
    <Styled.TopHeader {...{ isMenuVisible }}>
      <HeaderLogo />
      <Menu {...{ isMenuVisible }} />
      <Profile />
      <MenuButton onClick={toggleMenu} {...{ isMenuVisible }} />
    </Styled.TopHeader>
  );
};
