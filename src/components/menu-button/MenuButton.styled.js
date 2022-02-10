import styled from 'styled-components';

export const MenuButton = styled.button`

    margin-top: 2px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    background-color: transparent;
    border: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1000px) {
    display: none
}

`

