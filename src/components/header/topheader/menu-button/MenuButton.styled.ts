import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 2px;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
