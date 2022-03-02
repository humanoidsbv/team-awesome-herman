import styled from "styled-components";

export const Header = styled.header<{ isMenuVisible: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBluePrimary500};
  display: flex;
  flex-direction: ${({ isMenuVisible }) => (isMenuVisible ? "column" : "row")};
  height: ${({ isMenuVisible }) => (isMenuVisible ? "100vh" : "70px")};
  justify-content: start;
  position: fixed;
  width: 100%;

  @media only screen and (${({ theme }) => theme.tablet}) {
    position: static;
  }

  @media only screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    flex-direction: row;
    height: 70px;
  }
`;
