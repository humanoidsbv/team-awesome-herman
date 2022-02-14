import styled, { css } from "styled-components";

export const Button = styled.button<{ style?: "primary" | "secondary" }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colorGreenPrimary500};
  border-radius: 8px;
  border: none;
  color: white;
  column-gap: 18px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;

  ${({ style }) =>
    style === "secondary" &&
    css`
      background-color: tomato;
    `};
`;
