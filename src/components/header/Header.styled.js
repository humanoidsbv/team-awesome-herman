import styled from 'styled-components';

export const Header = styled.header`
  background: #4f88ef;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  position: fixed;

  width: 100%;

  @media only screen and (min-width: 960px) {
 
    align-items: center;
    justify-content: start;

  }

`;