import * as Styled from "../SubHeader.styled";

import { Title } from "./title/Title";
import { Entries } from "./entries/Entries";

export const Timesheets = () => {
  return (
    <Styled.Timesheets>
      <Title />
      <Styled.Divider>|</Styled.Divider>
      <Entries />
    </Styled.Timesheets>
  );
};
