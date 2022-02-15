import { useState } from "react";

import { TopHeader } from "./top-header/TopHeader";
import { SubHeader } from "./sub-header/SubHeader";

import * as Styled from "./Header.styled";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Styled.Header isMenuVisible={isMenuVisible}>
      <TopHeader isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <SubHeader />
    </Styled.Header>
  );
};
