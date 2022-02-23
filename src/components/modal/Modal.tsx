import React from "react";
import { createPortal } from "react-dom";

import { Dialog } from "./Dialog";

import * as Styled from "./Modal.styled";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  setTimeEntries: React.Dispatch<React.SetStateAction<{}>>;
  timeEntries: {}[];
}

export const Modal = ({ isActive, onClose, setTimeEntries, timeEntries }: ModalProps) =>
  isActive &&
  createPortal(
    <Styled.Backdrop onClick={onClose}>
      <Dialog
        onClick={(event: { stopPropagation: () => any }) => event.stopPropagation()}
        onClose={onClose}
        setTimeEntries={setTimeEntries}
        timeEntries={timeEntries}
      />
    </Styled.Backdrop>,
    document.body,
  );
