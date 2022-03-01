import React from "react";
import { createPortal } from "react-dom";

import { Dialog } from "./Dialog";

import * as Styled from "./Modal.styled";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
}

export const Modal = ({ isActive, onClose }: ModalProps) =>
  isActive ? (
    createPortal(
      <Styled.Backdrop onClick={onClose}>
        <Dialog
          onClick={(event: { stopPropagation: () => void }) => event.stopPropagation()}
          onClose={onClose}
        />
      </Styled.Backdrop>,
      document.body,
    )
  ) : (
    <></>
  );
