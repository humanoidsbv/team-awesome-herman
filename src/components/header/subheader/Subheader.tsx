import { Button } from "../../shared/Button";
import { TitleAndStatistic } from "./title-and-statistic/TitleAndStatistic";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  setIsModalActive: (arg: boolean) => void;
  timeEntries: {}[];
}

export const Subheader = ({ setIsModalActive, timeEntries }: SubheaderProps) => {
  return (
    <Styled.Subheader>
      <TitleAndStatistic timeEntriesLength={timeEntries.length} />
      <Button
        icon={true}
        label="New time entry"
        onClick={() => setIsModalActive(true)}
        variety="primary"
      />
    </Styled.Subheader>
  );
};
