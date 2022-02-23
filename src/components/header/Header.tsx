import { useState } from "react";

import { Topheader } from "./topheader/Topheader";
import { Subheader } from "./subheader/Subheader";

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
      <Topheader isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      {children}
    </Styled.Header>
  );
};
