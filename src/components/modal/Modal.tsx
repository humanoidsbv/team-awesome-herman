import React from "react";
import { createPortal } from "react-dom";

import * as Styled from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode | React.ReactNode[];
  isActive: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isActive, onClose }: ModalProps) =>
  isActive ? (
    createPortal(<Styled.Backdrop onClick={onClose}>{children}</Styled.Backdrop>, document.body)
  ) : (
    <></>
  );
