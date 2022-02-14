import * as Styled from "./Menu.styled";

type MenuProps = {
  isActive: boolean;
};

export const Menu = ({ isActive }: MenuProps): React.ReactElement => {
  return (
    <Styled.MenuList isActive={isActive}>
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