import * as Styled from "../time-entries/TimeEntries.styled";

interface TimeEntryHeaderProps {
  timeStamp: string;
}

export const TimeEntryHeader = ({ timeStamp }: TimeEntryHeaderProps) => {
  const dateFormatted = new Date(timeStamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Styled.TimeEntryHeader>
      <span>{dateFormatted}</span>
      <span>Total time</span>
    </Styled.TimeEntryHeader>
  );
};
