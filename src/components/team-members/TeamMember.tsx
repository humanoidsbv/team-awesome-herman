import React from "react";

import * as Styled from "./TeamMembers.styled";

import { TeamMemberProps } from "../../types/TeamMember.types";

interface ITeamMember {
  teamMember: TeamMemberProps;
}

export const TeamMember = ({ teamMember }: ITeamMember) => {
  const startDate = new Date(teamMember.startingDate).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const fullName = teamMember.firstName + " " + teamMember.lastName;

  return (
    <Styled.TeamMember>
      <Styled.Profile>
        <Styled.Avatar />
        <Styled.NameAndFunction>
          <Styled.Name>{fullName}</Styled.Name>
          <Styled.Function>{teamMember.function}</Styled.Function>
        </Styled.NameAndFunction>
      </Styled.Profile>
      <Styled.EmployerAndStartingDate>
        <Styled.Employer>
          <Styled.EmployerName>{teamMember.employer}</Styled.EmployerName>
          <Styled.EmployerTitle>Employer</Styled.EmployerTitle>
        </Styled.Employer>
        <Styled.Date>
          <Styled.StartingDate>{startDate}</Styled.StartingDate>
          <Styled.StartingDateTitle>Starting date</Styled.StartingDateTitle>
        </Styled.Date>
      </Styled.EmployerAndStartingDate>
    </Styled.TeamMember>
  );
};
