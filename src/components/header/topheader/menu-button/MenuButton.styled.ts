import styled from "styled-components";

export const MenuButton = styled.button<{ isMenuVisible: boolean }>`
  background-color: transparent;
  border: none;
  margin-top: 2px;
  padding: ${({ isMenuVisible }) => (isMenuVisible ? "0" : "20px")};
  position: ${({ isMenuVisible }) => (isMenuVisible ? "absolute" : "none")};
  right: ${({ isMenuVisible }) => (isMenuVisible ? "20px" : "none")};
  top: ${({ isMenuVisible }) => (isMenuVisible ? "20px" : "none")};

  &:hover {
    cursor: pointer;
  }

  @media only screen and (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;
