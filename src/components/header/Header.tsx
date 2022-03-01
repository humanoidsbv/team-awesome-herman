import { useState } from "react";

import { HeaderLogo } from "../header/header-logo/HeaderLogo";
import { Menu } from "../header/menu/Menu";
import { MenuButton } from "../header/menu-button/MenuButton";
import { Profile } from "../header/profile/Profile";

import * as Styled from "./Header.styled";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Styled.Header isMenuVisible={isMenuVisible}>
      <HeaderLogo />
      <Menu isMenuVisible={isMenuVisible} />
      <Profile />
      <MenuButton isMenuVisible={isMenuVisible} onClick={toggleMenu} />
    </Styled.Header>
  );
};
