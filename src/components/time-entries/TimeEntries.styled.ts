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
  margin-top: 25px;
  font-family: ${({ theme }) => theme.fontPrimary};

  label {
    margin-right: 10px;
  }
`;
