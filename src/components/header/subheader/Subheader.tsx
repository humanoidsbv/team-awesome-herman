import { Button } from "../../shared/Button";
import { TitleAndStatistic } from "./title-and-statistic/TitleAndStatistic";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  handleButtonClick: (arg: boolean) => void;
}

export const Subheader = ({ handleButtonClick }: SubheaderProps) => {
  return (
    <Styled.Subheader>
      <TitleAndStatistic />
      <Button
        icon={true}
        label="New time entry"
        onClick={() => handleButtonClick(true)}
        variety="primary"
      />
    </Styled.Subheader>
  );
};
