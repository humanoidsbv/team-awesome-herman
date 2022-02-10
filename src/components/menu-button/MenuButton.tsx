import * as Styled from "./MenuButton.styled";
import HamburgerIcon from "../../../public/assets/icons/Hamburger.svg";
import CloseIcon from "../../../public/assets/icons/Close.svg";

type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const MenuButton = ({ onClick, isActive }: Props) => {
  return (
    <Styled.MenuButton onClick={onClick}>
      {isActive ? <CloseIcon /> : <HamburgerIcon />}
    </Styled.MenuButton>
  );
};
