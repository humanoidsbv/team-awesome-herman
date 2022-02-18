import styled from "styled-components";

export const TimeEntries = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const TimeEntryHeader = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeHeader};
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
`;

export const AddEntryButton = styled.button`
  background: none;
  border: none;

  button {
    margin-top: 20px;
    padding: 0 20px;
  }
`;
