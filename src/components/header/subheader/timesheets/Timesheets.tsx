import * as Styled from "../Subheader.styled";

import { Title } from "./title/Title";
import { Entries } from "./entries-amount/Entries";

export const Timesheets = () => {
  return (
    <Styled.Timesheets>
      <Title />
      <Styled.Divider>|</Styled.Divider>
      <Entries />
    </Styled.Timesheets>
  );
};
