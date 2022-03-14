import styled from "styled-components";

export const TeamMembers = styled.div`
  margin-top: 100px;
`;

export const TeamMember = styled.div`
  background-color: ${({ theme }) => theme.shadeWhite};
  border: 1px solid ${({ theme }) => theme.shadeGrey300};
  border-left: 4px solid ${({ theme }) => theme.colorBluePrimary500};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeBody};
  height: auto;
  justify-content: space-between;
  margin-top: 25px;
  width: 100%;

  @media only screen and (${({ theme }) => theme.tablet}) {
    align-items: center;
    flex-direction: row;
  }
`;

export const Profile = styled.div`
  align-items: center;
  border-bottom: 1px solid lightgrey;
  column-gap: 15px;
  display: flex;
  padding: 15px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    align-items: center;
    border: none;
    flex-direction: row;
  }
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizeBody};
`;

export const Avatar = styled.div`
  background-image: url("assets/images/herman.jpg");
  background-size: cover;
  border-radius: 30px;
  height: 40px;
  width: 40px;
`;

export const NameAndFunction = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Function = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;

export const ClientAndStartingDate = styled.div`
  align-items: center;
  column-gap: 30px;
  display: flex;
  padding: 15px;
`;

export const Client = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    text-align: right;
  }
`;

export const ClientName = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizeBody};
`;

export const ClientTitle = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  left: 200px;
  position: absolute;
  row-gap: 2px;

  @media only screen and (${({ theme }) => theme.tablet}) {
    text-align: right;
    position: static;
  }
`;

export const StartingDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizeBody};
`;

export const StartingDateTitle = styled.div`
  color: ${({ theme }) => theme.shadeGrey700};
  font-size: ${({ theme }) => theme.fontSizeSmall};
`;

export const SortTeamMemberButton = styled.div`
  align-self: flex-end;
  margin-top: 25px;
  font-family: ${({ theme }) => theme.fontPrimary};

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
