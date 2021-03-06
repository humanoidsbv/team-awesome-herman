import styled from "styled-components";

export const MenuList = styled.ul<{ isMenuVisible: boolean }>`
  align-self: center;
  color: white;
  display: ${({ isMenuVisible }) => (isMenuVisible ? "flex" : "none")};
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
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

  .active {
    text-decoration: underline;
    color: yellow;
  }

  @media only screen and (${({ theme }) => theme.desktop}) {
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
    background-color: ${({ theme }) => theme.colorBluePrimary700};
    color: white;
  }

  a:active {
    color: white;
    text-decoration: underline;
  }
`;
