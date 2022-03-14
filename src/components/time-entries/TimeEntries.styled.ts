import styled from "styled-components";

export const TimeEntryHeader = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  display: flex;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeHeader};
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
`;

export const AddEntryButton = styled.div`
  button {
    margin-top: 20px;
    padding: 0 20px;
  }
`;

export const Modal = styled.div`
  position: absolute;
`;

export const ClientFilterButton = styled.div`
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fontPrimary};
  margin-top: 25px;

  select {
    background-color: ${({ theme }) => theme.shadeGrey300};
    border: none;
    display: flex;
    padding: 5px;
  }

  label {
    margin-right: 10px;
  }
`;
