import styled from "styled-components";

export const Topheader = styled.header<{ isMenuVisible: boolean }>`
  align-items: start;
  background-color: ${({ theme }) => theme.colorBluePrimary500};
  display: flex;
  flex-direction: ${({ isMenuVisible }) => (isMenuVisible ? "column" : "row")};
  height: ${({ isMenuVisible }) => (isMenuVisible ? "100vh" : "auto")};
  justify-content: start;

  @media only screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    flex-direction: row;
    height: auto;
    min-height: 50px;
    position: static;
  }
`;
