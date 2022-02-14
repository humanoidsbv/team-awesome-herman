import { Button } from "../../UI/Button";
import { Team } from "./team/Team";

import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  const clickHandler = (): void => {
    alert("Button clicked");
  };

  return (
    <Styled.SubHeader>
      <Team />
      <Button label="New time entry" style="primary" plusIcon={true} onClick={clickHandler} />
    </Styled.SubHeader>
  );
};
