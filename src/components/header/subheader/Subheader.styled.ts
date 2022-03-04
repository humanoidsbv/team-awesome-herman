import styled from "styled-components";

export const Subheader = styled.div`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.shadeGrey300};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 120px;
  padding: 30px;
  row-gap: 10px;
  width: 100vw;

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

export const SubheaderTitle = styled.div`
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

export const Subtitle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.shadeGrey700};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;
