import CloseIconWrapper from "../../../public/assets/icons/Close.svg";

import * as Styled from "./Modal.styled";

export const DialogHeader = ({ onClose }) => {
  return (
    <Styled.DialogHeader>
      <span>New time entry</span>
      <CloseIconWrapper fill="black" onClick={onClose} />
    </Styled.DialogHeader>
  );
};
