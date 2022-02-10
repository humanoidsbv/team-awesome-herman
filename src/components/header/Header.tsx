import React, { useState } from "react";

import { Menu } from "../menu/Menu";
import { HeaderLogo } from "../header-logo/HeaderLogo";
import { MenuButton } from "../menu-button/MenuButton";
import { Profile } from "../profile/Profile";

import * as Styled from "./Header.styled";

export const Header = () => {
  interface Props {
    isActive: boolean;
  }

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Header isActive={isActive}>
      <HeaderLogo />
      <Menu isActive={isActive} />
      <Profile />
      <MenuButton onClick={handleClick} isActive={isActive} />
    </Styled.Header>
  );
};
