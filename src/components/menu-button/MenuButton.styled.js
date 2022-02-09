import styled from 'styled-components';

export const MenuButton = styled.div`
    
    align-items: center;
    
    flex-grow: 1;
    flex-basis: 0;

    svg {
        position: absolute;
        top: 24px;
        right: 24px;
    }
    
  
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1000px) {
    display: none
}

`
