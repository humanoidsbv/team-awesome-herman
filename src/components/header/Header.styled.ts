import styled from "styled-components";

export const Header = styled.header<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: scroll;
  position: ${({ isActive }) => (isActive ? "fixed" : "static")};
  width: 100%;
`;
