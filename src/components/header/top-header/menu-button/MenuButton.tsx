import * as Styled from "./MenuButton.styled";
import HamburgerIcon from "../../../../../public/assets/icons/Hamburger.svg";
import CloseIcon from "../../../../../public/assets/icons/Close.svg";

type MenuButtonProps = {
  onClick: () => void;
  isMenuVisible: boolean;
};

export const MenuButton = ({ onClick, isMenuVisible }: MenuButtonProps): React.ReactElement => {
  return (
    <Styled.MenuButton onClick={onClick}>
      {isMenuVisible && <CloseIcon />}
      {!isMenuVisible && <HamburgerIcon />}
    </Styled.MenuButton>
  );
};
