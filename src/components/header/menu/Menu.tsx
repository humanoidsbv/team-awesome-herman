import Link from "next/link";

import * as Styled from "./Menu.styled";

interface MenuProps {
  isMenuVisible: boolean;
}

export const Menu = ({ isMenuVisible }: MenuProps): React.ReactElement => {
  return (
    <Styled.MenuList isMenuVisible={isMenuVisible}>
      <li>
        <Link href="/">
          <a>Timesheets</a>
        </Link>
      </li>
      <li>
        <Link href="/team-members">
          <a>Team members</a>
        </Link>
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
