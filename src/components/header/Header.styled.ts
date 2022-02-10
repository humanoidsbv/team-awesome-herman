import styled from "styled-components";

export const Header = styled.header<{ isActive: boolean }>`
  ${(props) => (props.isActive ? "position: fixed" : "position: static")};
  ${(props) => (props.isActive ? "height: 100vh" : "height: auto")};
  ${(props) => (props.isActive ? "flex-direction: column" : "flex-direction: row")};

  align-items: start;
  background: #4f88ef;
  display: flex;
  justify-content: start;
  overflow: scroll;
  position: fixed;
  width: 100%;

  @media only screen and (min-width: 1000px) {
    align-items: center;
    height: auto;
    min-height: 50px;
    position: static;
    flex-direction: row;
  }
`;
