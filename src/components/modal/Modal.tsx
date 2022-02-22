import React from "react";
import { createPortal } from "react-dom";

import { Dialog } from "./Dialog";

import * as Styled from "./Modal.styled";

export const Modal = ({ children, isActive, onClose }) =>
  isActive &&
  createPortal(
    <Styled.Backdrop onClick={onClose}>
      <Dialog onClick={(event) => event.stopPropagation()} onClose={onClose} />
    </Styled.Backdrop>,
    document.body,
  );
