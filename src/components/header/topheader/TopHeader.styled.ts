import styled from "styled-components";

export const TopHeader = styled.header<{ isActive: boolean }>`
  align-items: start;
  background-color: ${({ theme }) => theme.colorBluePrimary500};
  display: flex;
  flex-direction: ${({ isActive }) => (isActive ? "column" : "row")};
  height: ${({ isActive }) => (isActive ? "100vh" : "auto")};
  justify-content: start;

  @media only screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    height: auto;
    min-height: 50px;
    position: static;
  }
`;
