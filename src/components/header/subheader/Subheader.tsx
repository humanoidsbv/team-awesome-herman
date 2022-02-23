import { Button } from "../../shared/Button";
import { TitleAndStatistic } from "./title-and-statistic/TitleAndStatistic";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  setIsModalActive: (arg: boolean) => void;
}

export const Subheader = ({ setIsModalActive }: SubheaderProps) => {
  return (
    <Styled.Subheader>
      <TitleAndStatistic />
      <Button
        icon={true}
        label="New time entry"
        onClick={() => setIsModalActive(true)}
        variety="primary"
      />
    </Styled.Subheader>
  );
};
