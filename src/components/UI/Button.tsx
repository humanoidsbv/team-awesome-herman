import * as Styled from "./Button.styled";

import Icon from "../../../public/assets/icons/Plus-Icon.svg";

type ButtonProps = {
  icon: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
};

export const Button = ({ icon, label, onClick, style }: ButtonProps) => {
  return (
    <Styled.Button {...{ onClick, style }}>
      {icon && <Icon fill="white" />}
      {label}
    </Styled.Button>
  );
};
