import styled, { css } from "styled-components";

export const Button = styled.button<{ style?: "primary" | "secondary" }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colorGreenPrimary500};
  border-radius: 4px;
  border: none;
  color: white;
  column-gap: 18px;
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  height: 50px;
  justify-content: center;

  ${({ style }) =>
    style === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.shadeGrey100};
    `};
`;
