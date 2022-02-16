import * as Styled from "./TimeEntry.styled";
import Bin from "../../../public/assets/icons/Bin.svg";

interface TimeEntryProps {
  client: string;
  duration: string;
  id: number;
  startTime: string;
  stopTime: string;
}

export const TimeEntry = ({ client, duration, id, startTime, stopTime }: TimeEntryProps) => {
  const startDate = new Date(startTime);
  const formattedStartTime = startDate.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const stopDate = new Date(stopTime);
  const formattedStopTime = stopDate.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Styled.TimeEntry>
      {client}
      <Styled.Time>
        {formattedStartTime} - {formattedStopTime}
        <Styled.Duration>{duration}</Styled.Duration>
      </Styled.Time>
      <Bin />
    </Styled.TimeEntry>
  );
};
