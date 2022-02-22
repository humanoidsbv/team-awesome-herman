import * as Styled from "./Button.styled";

import Icon from "../../../public/assets/icons/Plus-Icon.svg";

type ButtonProps = {
  icon?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variety?: "primary" | "secondary";
};

export const Button = ({ icon, label, onClick, variety }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} variety={variety}>
      {icon && <Icon fill="white" />}
      {label}
    </Styled.Button>
  );
};
