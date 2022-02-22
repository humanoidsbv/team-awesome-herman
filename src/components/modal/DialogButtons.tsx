import { Button } from "../shared";
import * as Styled from "../modal/Modal.styled";

export const DialogButtons = ({ onClose, submitHandler }) => {
  return (
    <Styled.DialogButtons>
      <Button icon={false} label="Cancel" onClick={onClose} variety="secondary" />
      <Button icon={false} label="Add time entry" onClick={submitHandler} />
    </Styled.DialogButtons>
  );
};
