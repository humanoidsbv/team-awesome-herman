import styled, { css } from "styled-components";

export const Button = styled.button<{ variety: "primary" | "secondary" | undefined }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colorGreenPrimary500};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.shadeGrey300};
  color: white;
  column-gap: 18px;
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  height: 40px;
  justify-content: center;

  ${({ variety }) =>
    variety === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.shadeGrey100};
      color: ${({ theme }) => theme.shadeGrey700};
    `}

  ${({ disabled }) =>
    disabled === true &&
    css`
      background-color: ${({ theme }) => theme.shadeGrey100};
      color: ${({ theme }) => theme.shadeGrey700};
      cursor: not-allowed;
      border: 2px solid red;
    `}
`;
