import * as Styled from "../Subheader.styled";

interface timeEntriesLengthProps {
  timeEntriesLength: number;
}

export const TitleAndStatistic = ({ timeEntriesLength }: timeEntriesLengthProps) => {
  return (
    <Styled.TitleAndStatistic>
      <Styled.Title>Timesheets</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Statistic>{timeEntriesLength} Entries</Styled.Statistic>
    </Styled.TitleAndStatistic>
  );
};
