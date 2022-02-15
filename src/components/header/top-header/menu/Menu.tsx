import * as Styled from "./Menu.styled";

interface MenuProps {
  isMenuVisible: boolean;
}

export const Menu = ({ isMenuVisible }: MenuProps): React.ReactElement => {
  return (
    <Styled.MenuList {...{ isMenuVisible }}>
      <li>
        <a href="/">Timesheets</a>
      </li>
      <li>
        <a href="/">Team members</a>
      </li>
      <li>
        <a href="/">Projects</a>
      </li>
      <li>
        <a href="/">Clients</a>
      </li>
      <li>
        <a href="/">Documents</a>
      </li>
    </Styled.MenuList>
  );
};
