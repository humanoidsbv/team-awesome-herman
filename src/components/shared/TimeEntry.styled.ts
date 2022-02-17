import styled from "styled-components";

export const TimeEntry = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeWhite};
  border: 1px solid ${({ theme }) => theme.shadeGrey300};
  border-left: 4px solid ${({ theme }) => theme.colorBluePrimary500};
  border-radius: 5px;
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeBody};
  height: 80px;
  justify-content: space-between;
  padding: 15px 20px;
  width: 100%;
`;

export const TimeRange = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 auto;
  row-gap: 10px;
  text-align: right;

  @media only screen and (${({ theme }) => theme.tablet}) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const Duration = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;

export const DeleteIcon = styled.div`
  cursor: pointer;
  padding: 10px;

  &:hover {
    svg {
      fill: red;
    }
  }
`;
