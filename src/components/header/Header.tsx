import { useContext } from "react";
import { StoreContext } from "../../providers/StoreProvider";

import { HeaderLogo } from "./header-logo/HeaderLogo";
import { Menu } from "./menu/Menu";
import { MenuButton } from "./menu-button/MenuButton";
import { Profile } from "./profile/Profile";

import * as Styled from "./Header.styled";

export const Header = () => {
  const state = useContext(StoreContext);
  const [isMenuVisible, setIsMenuVisible] = state.isMenuVisible;

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Styled.Header isMenuVisible={isMenuVisible}>
      <HeaderLogo isMenuVisible={isMenuVisible} />
      <Menu />
      <Profile />
      <MenuButton isMenuVisible={isMenuVisible} onClick={toggleMenu} />
    </Styled.Header>
  );
};
