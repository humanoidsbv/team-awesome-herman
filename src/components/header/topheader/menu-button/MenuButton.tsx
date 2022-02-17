import * as Styled from "./MenuButton.styled";
import HamburgerIcon from "../../../../../public/assets/icons/Hamburger.svg";
import CloseIcon from "../../../../../public/assets/icons/Close.svg";

type MenuButtonProps = {
  isMenuVisible: boolean;
  onClick: () => void;
};

export const MenuButton = ({ isMenuVisible, onClick }: MenuButtonProps): React.ReactElement => {
  return (
    <Styled.MenuButton isMenuVisible={isMenuVisible} onClick={onClick}>
      {isMenuVisible && <CloseIcon />}
      {!isMenuVisible && <HamburgerIcon />}
    </Styled.MenuButton>
  );
};
