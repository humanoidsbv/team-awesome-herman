import { useContext } from "react";

import { Button } from "../../shared/Button";
import { StoreContext } from "../../providers/StoreProvider";
import { TitleAndSubtitle } from "./title-and-statistic/TitleAndStatistic";

import * as Styled from "./Subheader.styled";

interface SubheaderProps {
  setIsModalActive: (arg: boolean) => void;
  title: string;
  subtitle: string;
  buttonLabel: string;
}

export const Subheader = ({ setIsModalActive, title, subtitle, buttonLabel }: SubheaderProps) => {
  const state = useContext(StoreContext);

  return (
    <Styled.Subheader>
      <TitleAndSubtitle title={title} subtitle={subtitle} />
      <Button
        icon={true}
        label={buttonLabel}
        onClick={() => setIsModalActive(true)}
        variety="primary"
      />
    </Styled.Subheader>
  );
};
