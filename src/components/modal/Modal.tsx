import React from "react";
import { createPortal } from "react-dom";
import { ITimeEntry } from "../shared/TimeEntry.types";

import { Dialog } from "./Dialog";

import * as Styled from "./Modal.styled";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  setTimeEntries: React.Dispatch<React.SetStateAction<ITimeEntry[]>>;
  timeEntries: ITimeEntry[];
}

export const Modal = ({ isActive, onClose, setTimeEntries, timeEntries }: ModalProps) =>
  isActive ? (
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
    )
  ) : (
    <></>
  );
