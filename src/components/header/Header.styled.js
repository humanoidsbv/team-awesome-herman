import styled from 'styled-components';

export const Header = styled.header`
  background: #4f88ef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  position: fixed;

  width: 100%;

  @media only screen and (min-width: 960px) {
    height: 60px;
    align-items: center;
    
  }

`;