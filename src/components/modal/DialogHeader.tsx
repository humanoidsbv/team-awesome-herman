import React from "react";

import CloseIconWrapper from "../../../public/assets/icons/Close.svg";

import * as Styled from "./Modal.styled";

interface DialogHeaderProps {
  dialogHeaderTitle: string;
  onClose: () => void;
}

export const DialogHeader = ({ dialogHeaderTitle, onClose }: DialogHeaderProps) => {
  return (
    <Styled.DialogHeader>
      <h5>{dialogHeaderTitle}</h5>
      <CloseIconWrapper fill="black" onClick={onClose} />
    </Styled.DialogHeader>
  );
};
