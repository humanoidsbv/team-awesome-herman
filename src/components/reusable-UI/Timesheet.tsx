import * as Styled from "./Timesheet.styled";
import Bin from "../../../public/assets/icons/Bin.svg";

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
      <Styled.TimeEntries>
        <Styled.TimeEntry>
          <Styled.Client>{timeEntries[0].client}</Styled.Client>
          <Styled.Time>
            <Styled.TimeRange>
              <span>09:00 - 17:00</span>
            </Styled.TimeRange>
            <Styled.TimeAdded>
              <span>08:00</span>
            </Styled.TimeAdded>
          </Styled.Time>
          <Styled.Delete>
            <Bin />
          </Styled.Delete>
        </Styled.TimeEntry>
      </Styled.TimeEntries>
    </Styled.TimeSheet>
  );
};
