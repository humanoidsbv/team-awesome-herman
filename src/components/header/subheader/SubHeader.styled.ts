import styled, { css } from "styled-components";

export const SubHeader = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  padding: 20px;
  row-gap: 10px;

  button {
    width: 100%;
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    button {
      padding: 0 20px;
      width: auto;
    }
  }
`;

export const Timesheets = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (${({ theme }) => theme.tablet}) {
    column-gap: 20px;
  }
`;

export const Divider = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.shadeGrey700};
  display: none;

  @media only screen and (${({ theme }) => theme.tablet}) {
    display: flex;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.shadeGrey800};
  font-size: ${({ theme }) => theme.fontSizeBody};
`;

export const Entries = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.shadeGrey700};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;
