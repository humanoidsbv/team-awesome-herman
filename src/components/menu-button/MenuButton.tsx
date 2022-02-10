import * as Styled from "./MenuButton.styled";
import HamburgerIcon from "../../../public/assets/icons/Hamburger.svg";
import CloseIcon from "../../../public/assets/icons/Close.svg";

export const MenuButton = (props) => {
  return (
    <Styled.MenuButton onClick={props.onClick}>
      {props.isActive ? <CloseIcon /> : <HamburgerIcon />}
    </Styled.MenuButton>
  );
};
