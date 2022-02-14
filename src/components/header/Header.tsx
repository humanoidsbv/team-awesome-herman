import { TopHeader } from "./top-header/TopHeader";
import { SubHeader } from "./sub-header/SubHeader";

import * as Styled from "./Header.styled";

export const Header = () => {
  return (
    <Styled.Header>
      <TopHeader />
      <SubHeader />
    </Styled.Header>
  );
};
