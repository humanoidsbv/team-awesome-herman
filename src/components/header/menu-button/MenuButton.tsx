import CloseIcon from "../../../../public/assets/icons/Close.svg";
import HamburgerIcon from "../../../../public/assets/icons/Hamburger.svg";

import * as Styled from "./MenuButton.styled";

type MenuButtonProps = {
  isMenuVisible: boolean;
  onClick: () => void;
};

export const MenuButton = ({ isMenuVisible, onClick }: MenuButtonProps) => {
  return (
    <Styled.MenuButton isMenuVisible={isMenuVisible} onClick={onClick} data-cy="menu-button">
      {isMenuVisible && <CloseIcon fill="white" />}
      {!isMenuVisible && <HamburgerIcon />}
    </Styled.MenuButton>
  );
};
