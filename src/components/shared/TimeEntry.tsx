import * as Styled from "./TimeEntry.styled";
import DeleteIconWrapper from "../../../public/assets/icons/bin.svg";

interface TimeEntryProps {
  timeEntry: {
    client: string;
    id: number;
    startTimestamp: string;
    stopTimestamp: string;
  };
  setTimeEntries: any;
}

export const TimeEntry = ({
  timeEntry: { client, id, startTimestamp, stopTimestamp },
  setTimeEntries,
}: TimeEntryProps) => {
  const timeFormat: {} = { hour: "2-digit", minute: "2-digit" };

  const startDate = new Date(startTimestamp);
  const formattedStartTime = startDate.toLocaleTimeString("nl-NL", timeFormat);

  const stopDate = new Date(stopTimestamp);
  const formattedStopTime = stopDate.toLocaleTimeString("nl-NL", timeFormat);

  const diff = Math.abs(startDate.getTime() - stopDate.getTime());
  const totalMinutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const removeTimeEntry = () => {
    setTimeEntries((entries: any[]) => entries.filter((entry) => entry.id !== id));
  };

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
      <Styled.DeleteIconWrapper onClick={removeTimeEntry}>
        <DeleteIconWrapper />
      </Styled.DeleteIconWrapper>
    </Styled.TimeEntry>
  );
};
