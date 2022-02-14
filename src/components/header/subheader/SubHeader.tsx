import { Button } from "../../UI/Button";
import { Timesheets } from "./timesheets/Timesheets";

import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  const clickHandler = (): void => {
    alert("Button clicked");
  };

  return (
    <Styled.SubHeader>
      <Timesheets />
      <Button label="New time entry" style="primary" plusIcon={true} onClick={clickHandler} />
    </Styled.SubHeader>
  );
};
