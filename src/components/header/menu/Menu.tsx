import Link from "next/link";

import * as Styled from "./Menu.styled";

interface MenuProps {
  isMenuVisible: boolean;
}

export const Menu = ({ isMenuVisible }: MenuProps) => {
  return (
    <Styled.MenuList isMenuVisible={isMenuVisible} data-cy="menu">
      <li>
        <Link href="/">Timesheets</Link>
      </li>
      <li>
        <Link href="/team-members">Team members</Link>
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
