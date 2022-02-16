import * as Styled from "./Timesheet.styled";

import { TimeEntries } from "./TimeEntries";

export const Timesheet = () => {
  const timeEntries = [
    {
      client: "Heineken",
      startTime: "09:00",
      stopTime: "17:00",
      date: "16-04-2021",
    },
    {
      client: "Port of Rotterdam",
      startTime: "09:00",
      stopTime: "17:00",
      date: "17-04-2021",
    },
  ];

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
