import { MouseEvent } from "react";

import * as Styled from "./Button.styled";

import Icon from "../../../public/assets/icons/Plus-Icon.svg";

export type ButtonProps = {
  icon?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variety?: "primary" | "secondary" | undefined;
  disabled?: boolean;
};

export const Button = ({ disabled, icon, label, onClick, variety }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} variety={variety} disabled={disabled}>
      {icon && <Icon fill="white" />}
      {label}
    </Styled.Button>
  );
};
