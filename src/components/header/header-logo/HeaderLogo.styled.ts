import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 26px;
  margin: 1rem;

  @media only screen and (min-width: 1024px) {
    flex-grow: 0;
    min-width: 150px;
  }
`;
