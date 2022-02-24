import * as Styled from "../Subheader.styled";

export const TitleAndStatistic = ({ timeEntries }) => {
  return (
    <Styled.TitleAndStatistic>
      <Styled.Title>Timesheets</Styled.Title>
      <Styled.Divider>|</Styled.Divider>
      <Styled.Statistic>{timeEntries.length} Entries</Styled.Statistic>
    </Styled.TitleAndStatistic>
  );
};
