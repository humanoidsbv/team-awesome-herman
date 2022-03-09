import React, { useState } from "react";

import { HeaderLogo } from "./header-logo/HeaderLogo";
import { Menu } from "./menu/Menu";
import { MenuButton } from "./menu-button/MenuButton";
import { Profile } from "./profile/Profile";

import * as Styled from "./Header.styled";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Styled.Header isMenuVisible={isMenuVisible}>
      <HeaderLogo isMenuVisible={isMenuVisible} />
      <Menu isMenuVisible={isMenuVisible} />
      <Profile />
      <MenuButton isMenuVisible={isMenuVisible} onClick={toggleMenu} />
    </Styled.Header>
  );
};
