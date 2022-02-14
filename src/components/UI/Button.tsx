import * as Styled from "./Button.styled";
import PlusIcon from "../../../public/assets/icons/Plus-Icon.svg";

type ButtonProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "primary" | "secondary";
  plusIcon: boolean;
};

export const Button = ({ label, onClick, style, plusIcon }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} style={style}>
      {plusIcon && <PlusIcon />}
      {label}
    </Styled.Button>
  );
};
