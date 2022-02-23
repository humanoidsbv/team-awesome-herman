import styled from "styled-components";

export const Header = styled.header<{ isMenuVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: ${({ isMenuVisible }) => (isMenuVisible ? "fixed" : "")};
  width: 100%;

  @media only screen and (${({ theme }) => theme.tablet}) {
    position: ${({ isMenuVisible }) => (isMenuVisible ? "fixed" : "")};
  }

  @media screen and (${({ theme }) => theme.tabletMaxWidth}) {
    position: fixed;
  }
`;
