import styled, { css } from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colorGreenPrimary500};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.shadeGrey300};
  color: white;
  column-gap: 18px;
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  height: 50px;
  justify-content: center;

  ${({ variety }) =>
    variety === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.shadeGrey100};
      color: ${({ theme }) => theme.shadeGrey700};
    `}
`;
