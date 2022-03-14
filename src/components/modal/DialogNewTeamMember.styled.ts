import styled from "styled-components";

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
    margin-bottom: 10px;
    padding: 10px;
  }

  input:invalid:not([value=""]) {
    background-color: pink;
    border: 2px solid red;
  }

  label {
    color: ${({ theme }) => theme.shadeGrey700};
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    margin: 10px 0 8px;
  }

  textarea {
    border-radius: 5px;
    border: solid 1px lightgrey;
    font-family: Proxima Nova;
    margin-bottom: 10px;
    padding: 10px;
  }

  span {
    color: red;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    margin-top: 5px;
  }

  button {
    padding: 10px;
  }

  @media only screen and (${({ theme }) => theme.tablet}) {
    height: fit-content;
    width: 70%;
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  background-image: url("assets/images/herman.jpg");
  background-size: cover;
  border-radius: 40px;
  height: 80px;
  width: 80px;
`;

export const EditAvatar = styled.div`
  margin: 10px;
  color: ${({ theme }) => theme.shadeGrey900};
`;

export const Name = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const LastName = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const RoleAndStartingDate = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Role = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StartingDate = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
