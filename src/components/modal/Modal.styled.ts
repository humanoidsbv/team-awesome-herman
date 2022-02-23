import styled from "styled-components";

export const Backdrop = styled.div`
  align-items: center;
  background: rgba(0, 0, 50, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const Dialog = styled.div`
  background-color: white;
  font-family: Proxima Nova;
  height: 100%;
  padding: 30px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 5px;
    border: solid 1px lightgrey;
    font-family: Proxima Nova;
    padding: 10px;
  }

  input:invalid:not([value=""]) {
    border: 2px solid red;
    background-color: pink;
  }

  label {
    color: ${({ theme }) => theme.shadeGrey700};
    font-size: ${({ theme }) => theme.fontSizeSmall};
    margin: 18px 0 8px;
  }

  span {
    color: ${({ theme }) => theme.shadeGrey700};
  }

  button {
    padding: 10px;
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    height: fit-content;
    width: 70%;
  }
`;

export const DialogHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 20px;

  svg:hover {
    cursor: pointer;
  }
`;

export const DialogButtons = styled.div`
  column-gap: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  button {
    width: 50%;
  }
`;

export const FormDateTime = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  flex-direction: row;
`;

export const FormDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTimeFrom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTimeTo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTimeDuration = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;
