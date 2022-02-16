import * as Styled from "./Daysheet.styled";

export const TimeEntryHeader = ({ timeStamp }) => {
  const dateObject = new Date(timeStamp);

  const dateFormatted = dateObject.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Styled.TimeEntryHeader>
      <span>{dateFormatted}</span>
      <span>08:00</span>
    </Styled.TimeEntryHeader>
  );
};
