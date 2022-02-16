import * as Styled from "./Daysheet.styled";

import { TimeEntries } from "./TimeEntries";

export const Daysheet = () => {
  return (
    <Styled.Daysheet>
      <TimeEntries />
    </Styled.Daysheet>
  );
};
