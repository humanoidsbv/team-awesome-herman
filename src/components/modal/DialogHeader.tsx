import CloseIconWrapper from "../../../public/assets/icons/Close.svg";

import * as Styled from "./Modal.styled";

interface DialogHeaderProps {
  onClose: () => void;
}

export const DialogHeader = ({ onClose }: DialogHeaderProps) => {
  return (
    <Styled.DialogHeader>
      <span>New time entry</span>
      <CloseIconWrapper fill="black" onClick={onClose} />
    </Styled.DialogHeader>
  );
};
