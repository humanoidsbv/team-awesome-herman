import styled from "styled-components";

export const Header = styled.header<{ isMenuVisible: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: ${({ isMenuVisible }) => (isMenuVisible ? "fixed" : "static")};
  width: 100%;

  @media only screen and (${({ theme }) => theme.tablet}) {
    position: ${({ isMenuVisible }) => (isMenuVisible ? "fixed" : "static")};
  }

  @media screen and (max-width: 600px) {
    position: fixed;
  }
`;
