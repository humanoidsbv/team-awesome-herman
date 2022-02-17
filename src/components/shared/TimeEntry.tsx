import * as Styled from "./TimeEntry.styled";
import DeleteIconWrapper from "../../../public/assets/icons/Bin.svg";

interface TimeEntryProps {
  client: string;
  startTime: string;
  stopTime: string;
}

export const TimeEntry = ({ client, startTime, stopTime }: TimeEntryProps) => {
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

  const diff = Math.abs(startDate.getTime() - stopDate.getTime());
  const totalMinutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <Styled.TimeEntry>
      <span>{client}</span>
      <Styled.TimeRange>
        <span>
          {formattedStartTime} - {formattedStopTime}
        </span>
        <Styled.Duration>
          <span>
            {hours < 10 ? "0" : ""}
            {hours + ":"}
            {minutes < 10 ? "0" : ""}
            {minutes}
          </span>
        </Styled.Duration>
      </Styled.TimeRange>
      <Styled.DeleteIcon>
        <DeleteIconWrapper />
      </Styled.DeleteIcon>
    </Styled.TimeEntry>
  );
};
