import * as Styled from "./TimeEntry.styled";
import DeleteIconWrapper from "../../../public/assets/icons/bin.svg";

interface TimeEntryProps {
  client: string;
  startTime: string;
  stopTime: string;
}

export const TimeEntry = ({ client, startTime, stopTime }: TimeEntryProps) => {
  const timeFormat: {} = { hour: "2-digit", minute: "2-digit" };

  const startDate = new Date(startTime);
  const formattedStartTime = startDate.toLocaleTimeString("nl-NL", timeFormat);

  const stopDate = new Date(stopTime);
  const formattedStopTime = stopDate.toLocaleTimeString("nl-NL", timeFormat);

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
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
          </span>
        </Styled.Duration>
      </Styled.TimeRange>
      <Styled.DeleteIconWrapper>
        <DeleteIconWrapper />
      </Styled.DeleteIconWrapper>
    </Styled.TimeEntry>
  );
};
