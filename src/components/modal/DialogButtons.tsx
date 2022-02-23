import { Button } from "../shared";

import * as Styled from "../modal/Modal.styled";

export const DialogButtons = ({ isFormValid, handleSubmit, onClose }) => {
  return (
    <Styled.DialogButtons>
      <Button icon={false} label="Cancel" onClick={onClose} variety="secondary" />
      <Button icon={false} label="Add time entry" onClick={handleSubmit} disabled={!isFormValid} />
    </Styled.DialogButtons>
  );
};
