import { useContext } from "react";

import { Button } from "../../shared/Button";
import { StoreContext } from "../../providers/StoreProvider";
import { TitleAndStatistic } from "./title-and-statistic/TitleAndStatistic";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  setIsModalActive: (arg: boolean) => void;
}

export const Subheader = ({ setIsModalActive }: SubheaderProps) => {
  const state = useContext(StoreContext);
  const [timeEntries] = state.timeEntries;

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
