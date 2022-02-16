import * as Styled from "./Timesheet.styled";

import { TimeEntries } from "./TimeEntries";

export const Timesheet = () => {
  return (
    <Styled.TimeSheet>
      <Styled.Day>
        <span>Friday 29-07 (Today)</span>
        <span>08:00</span>
      </Styled.Day>
      <TimeEntries />
    </Styled.TimeSheet>
  );
};
