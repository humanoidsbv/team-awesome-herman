import styled from "styled-components";

export const Backdrop = styled.div`
  align-items: center;
  background: rgba(0, 0, 50, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const DialogHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 20px;

  h5 {
    color: ${({ theme }) => theme.shadeGrey700};
    font-weight: normal;
  }

  svg:hover {
    cursor: pointer;
  }
`;
