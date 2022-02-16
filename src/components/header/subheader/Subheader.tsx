import { Button } from "../../shared/Button";
import { Timesheets } from "./timesheets/Timesheets";

import * as Styled from "./Subheader.styled";

export const Subheader = () => {
  const handleClick = (): void => {
    alert("Button clicked");
  };

  return (
    <Styled.Subheader>
      <Timesheets />
      <Button icon={true} label="New time entry" onClick={handleClick} style="primary" />
    </Styled.Subheader>
  );
};
