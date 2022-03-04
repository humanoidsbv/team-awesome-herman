import React, { useContext, useState, useEffect } from "react";

import { DialogNewTeamMember } from "../modal/DialogNewTeamMember";

import { Modal } from "../modal/Modal";
import { StoreContext } from "../../providers/StoreProvider";
import { Subheader } from "../header/subheader/Subheader";
import { TeamMember } from "./TeamMember";

import { InitialTeamMembersProps } from "../../../pages/team-members";
import { TeamMemberProps } from "../../types/TeamMember.types";

import * as Styled from "./TeamMembers.styled";

export const TeamMembers = ({ initialTeamMembers }: InitialTeamMembersProps) => {
  const state = useContext(StoreContext);

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [teamMembers, setTeamMembers] = state.teamMembers;

  const [sortOption, setSortOption] = useState("firstName");

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    setTeamMembers(initialTeamMembers);
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSortOption(target.value);
  };

  return (
    <>
      <Subheader
        buttonLabel={`New Humanoid`}
        setIsModalActive={setIsModalActive}
        subtitle={`${teamMembers.length}` + ` Humanoids`}
        title={`Team members`}
      />

      <Modal isActive={isModalActive} onClose={handleClose}>
        <DialogNewTeamMember
          onClick={(event) => event.stopPropagation()}
          onClose={handleClose}
          dialogHeaderTitle={`New Humanoid`}
        />
      </Modal>

      <Styled.SortTeamMemberButton>
        <label htmlFor="sortOption">Filter:</label>

        <select name="sortOption" id="sortOption" onChange={handleChange}>
          <option value="firstName">Name</option>
          <option value="employer">Employer</option>
          <option value="startingDate">Starting Date</option>
        </select>
      </Styled.SortTeamMemberButton>

      {teamMembers
        .sort((a: TeamMemberProps, b: TeamMemberProps) =>
          a[sortOption].localeCompare(b[sortOption]),
        )
        .map((teamMember) => {
          return <TeamMember teamMember={teamMember} />;
        })}
    </>
  );
};
