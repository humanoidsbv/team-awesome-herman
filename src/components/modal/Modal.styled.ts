import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 50, 0.5);
`;

export const Dialog = styled.div`
  font-family: Proxima Nova;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: white;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border: solid 1px lightgrey;
    border-radius: 5px;
    font-family: Proxima Nova;
    padding: 10px;
  }

  label {
    margin: 18px 0 8px;
    color: ${({ theme }) => theme.shadeGrey700};
    font-size: ${({ theme }) => theme.fontSizeSmall};
  }

  span {
    color: ${({ theme }) => theme.shadeGrey700};
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    height: 50%;
    width: 50%;
  }
`;

export const DialogHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
