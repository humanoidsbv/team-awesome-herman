import styled from "styled-components";

export const Daysheet = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const TimeEntries = styled.div``;

export const TimeEntryHeader = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeHeader};
  justify-content: space-between;
  padding: 15px 0;
`;

export const TimeEntry = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.shadeWhite};
  border-bottom: 1px solid ${({ theme }) => theme.shadeGrey300};
  border-left: 4px solid ${({ theme }) => theme.colorBluePrimary500};
  border-radius: 5px;
  border-right: 1px solid ${({ theme }) => theme.shadeGrey300};
  border-top: 1px solid ${({ theme }) => theme.shadeGrey300};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeBody};
  height: 80px;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: right;

  @media only screen and (${({ theme }) => theme.tablet}) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const TimeAdded = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;
