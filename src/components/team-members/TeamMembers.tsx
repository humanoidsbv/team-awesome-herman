import { ChangeEvent, useContext, useState, useEffect } from "react";

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
  const [teamMembers, setTeamMembers] = state.teamMembers;
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState("firstName");

  useEffect(() => {
    setTeamMembers(initialTeamMembers);
  }, []);

  const handleClose = () => {
    setIsModalActive(false);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(target.value);
  };

  return (
    <>
      <Subheader
        buttonLabel="New Humanoid"
        setIsModalActive={setIsModalActive}
        subtitle={`${teamMembers.length} Humanoids`}
        title="Team members"
      />

      <Modal isActive={isModalActive} onClose={handleClose}>
        <DialogNewTeamMember onClose={handleClose} dialogHeaderTitle="New Humanoid" />
      </Modal>

      <Styled.SortTeamMemberButton>
        <select name="sortOption" id="sortOption" onChange={handleChange}>
          <option value="firstName">Name</option>
          <option value="client">Client</option>
          <option value="startingDate">Starting Date</option>
        </select>
      </Styled.SortTeamMemberButton>

      {teamMembers
        .sort((a, b) =>
          a[sortOption as keyof Omit<TeamMemberProps, "id">].localeCompare(
            b[sortOption as keyof Omit<TeamMemberProps, "id">],
          ),
        )
        .map((teamMember) => {
          return <TeamMember key={teamMember.id} teamMember={teamMember} />;
        })}
    </>
  );
};
