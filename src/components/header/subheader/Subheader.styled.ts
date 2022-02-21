import styled from "styled-components";

export const Subheader = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  padding: 20px;
  row-gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.shadeGrey300};
  width: 100%;
  height: 120px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    align-items: center;
    flex-direction: row;
    height: 70px;
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
  font-size: ${({ theme }) => theme.fontSizeBody};
`;

export const Entries = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.shadeGrey700};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;

export const Modal = styled.div`
  position: absolute;
`;
