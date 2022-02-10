import styled from "styled-components";

export const MenuList = styled.ul<{ isActive: boolean }>`
  ${(props) => (props.isActive ? "display: flex" : "display: none")};
  align-self: center;
  color: white;
  flex-direction: column;
  font-family: Proxima Nova;
  font-size: 24px;
  height: 100vh;
  line-height: 24px;
  list-style: none;
  margin-top: 40px;
  row-gap: 30px;
  text-align: center;

  li {
    margin: 10px;
  }

  a {
    color: white;
    padding: 10px;
    text-decoration: none;
  }

  @media only screen and (min-width: 1000px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-family: Proxima Nova;
    font-size: 14px;
    height: auto;
    justify-content: start;
    list-style-type: none;
    margin-top: 0px;
    row-gap: 0px;
  }

  a:hover {
    background-color: #1166a5;
    color: white;
  }

  a:active {
    color: white;
    text-decoration: underline;
  }
`;
