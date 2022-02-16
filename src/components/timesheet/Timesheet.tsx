import * as Styled from "./Timesheet.styled";

import { TimeEntries } from "./TimeEntries";

export const Timesheet = () => {
  return (
    <Styled.Timesheet>
      <TimeEntries />
    </Styled.Timesheet>
  );
};
