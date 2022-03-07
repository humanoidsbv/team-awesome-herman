import styled from "styled-components";

export const HeaderLogo = styled.div<{ isMenuVisible: boolean }>`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 26px;
  margin: 30px;

  align-self: ${({ isMenuVisible }) => (isMenuVisible ? "start" : "auto")};

  @media only screen and (min-width: 1024px) {
    flex-grow: 0;
    min-width: 150px;
  }
`;
