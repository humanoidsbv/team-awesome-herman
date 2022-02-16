import * as Styled from "./TimeEntry.styled";
import Bin from "../../../public/assets/icons/Bin.svg";

export const TimeEntry = () => {
  return (
    <Styled.TimeEntry>
      Heineken
      <Styled.Time>
        09:00 - 17:00
        <Styled.TimeAdded>08:00</Styled.TimeAdded>
      </Styled.Time>
      <Bin />
    </Styled.TimeEntry>
  );
};
