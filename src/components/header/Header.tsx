import { TopHeader } from "./topheader/TopHeader";
import { SubHeader } from "./subheader/SubHeader";

import * as Styled from "./Header.styled";

export const Header = () => {
  return (
    <Styled.Header>
      <TopHeader />
      <SubHeader />
    </Styled.Header>
  );
};
