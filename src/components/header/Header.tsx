import { useState } from "react";

import { Menu } from "../header/menu/Menu";
import { HeaderLogo } from "../header/header-logo/HeaderLogo";
import { MenuButton } from "../header/menu-button/MenuButton";
import { Profile } from "../header/profile/Profile";

import * as Styled from "./Header.styled";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
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
