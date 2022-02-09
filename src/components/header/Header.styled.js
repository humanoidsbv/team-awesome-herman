import styled from 'styled-components';

export const Header = styled.header`
  ${props => props.isActive ? 'position: fixed' : 'position: static'};
  align-items: start;
  background: #4f88ef;
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: fixed;
  width: 100%;

  // Desktop
  @media only screen and (min-width: 1000px) {
    align-items: center;
    position: static;
  }

`;