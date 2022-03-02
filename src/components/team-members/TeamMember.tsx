import React from "react";

import * as Styled from "./TeamMembers.styled";

import { TeamMemberProps } from "../../types/TeamMember.types";

interface ITeamMember {
  teamMember: TeamMemberProps;
}

export const TeamMember = ({ teamMember }: ITeamMember) => {
  const startDateObject = new Date(teamMember.startingDate);
  const month = startDateObject.toLocaleString("default", { month: "long" });
  const year = startDateObject.getFullYear();
  const startDate = month + " " + year;

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
        <Styled.EmployerAndTitle>
          <Styled.Employer>{teamMember.employer}</Styled.Employer>
          <Styled.EmployerTitle>Employer</Styled.EmployerTitle>
        </Styled.EmployerAndTitle>
        <Styled.StartingDateAndTitle>
          <Styled.StartingDate>{startDate}</Styled.StartingDate>
          <Styled.StartingDateTitle>Starting date</Styled.StartingDateTitle>
        </Styled.StartingDateAndTitle>
      </Styled.EmployerAndStartingDate>
    </Styled.TeamMember>
  );
};
