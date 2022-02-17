import * as Styled from "./Timesheet.styled";

interface TimeEntryHeaderProps {
  timeStamp: string;
}

export const TimeEntryHeader = ({ timeStamp }: TimeEntryHeaderProps) => {
  const dateObject = new Date(timeStamp);

  const dateFormatted = dateObject.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Styled.TimeEntryHeader>
      <span>{dateFormatted}</span>
      <span>Duration</span>
    </Styled.TimeEntryHeader>
  );
};
