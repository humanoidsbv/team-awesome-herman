import { Button } from "../shared";

import * as Styled from "../modal/Modal.styled";

interface DialogButtonsProps {
  handleSubmit: () => void;
  isFormValid: boolean | undefined;
  onClick: () => void;
  onClose: () => void;
}

export const DialogButtons = ({ handleSubmit, isFormValid, onClose }: DialogButtonsProps) => {
  return (
    <Styled.DialogButtons>
      <Button icon={false} label="Cancel" onClick={onClose} variety="secondary" />
      <Button icon={false} label="Add time entry" onClick={handleSubmit} disabled={!isFormValid} />
    </Styled.DialogButtons>
  );
};
