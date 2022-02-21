import CloseIcon from "../../../public/assets/icons/Close.svg";

import * as Styled from "./Modal.styled";

export const DialogHeader = () => {
  return (
    <Styled.DialogHeader>
      <span>New time entry</span>
      <CloseIcon fill="black" />
    </Styled.DialogHeader>
  );
};
