import { Button } from "../../UI/Button";
import { Timesheets } from "./timesheets/Timesheets";

import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  const handleClick = (): void => {
    alert("Button clicked");
  };

  return (
    <Styled.SubHeader>
      <Timesheets />
      <Button icon={true} label="New time entry" onClick={handleClick} style="primary" />
    </Styled.SubHeader>
  );
};
