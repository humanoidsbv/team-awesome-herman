import styled from "styled-components";

export const Header = styled.header<{ isActive: boolean }>`
  align-items: start;
  background-color: ${({ theme }) => theme.colorPrimary};
  display: flex;
  flex-direction: ${({ isActive }) => (isActive ? "column" : "row")};
  height: ${({ isActive }) => (isActive ? "100vh" : "auto")};
  justify-content: start;
  overflow: scroll;
  position: ${({ isActive }) => (isActive ? "fixed" : "static")};
  position: fixed;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    height: auto;
    min-height: 50px;
    position: static;
  }
`;
