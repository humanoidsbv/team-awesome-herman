import React, { useContext, useState, useEffect } from "react";

import { DialogNewTeamMember } from "../modal/DialogNewTeamMember";

import { Modal } from "../modal/Modal";
import { StoreContext } from "../providers/StoreProvider";
import { Subheader } from "../header/subheader/Subheader";
import { TeamMember } from "./TeamMember";

import { InitialTeamMembersProps } from "../../../pages/team-members";
import * as Styled from "./TeamMembers.styled";

export const TeamMembers = ({ initialTeamMembers }: InitialTeamMembersProps) => {
  const state = useContext(StoreContext);

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [teamMembers, setTeamMembers] = state.teamMembers;

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    setTeamMembers(initialTeamMembers);
  }, []);

  const buttonLabel = "New Humanoid";
  const dialogHeaderTitle = "New Humanoid";
  const subtitle = teamMembers.length + " Humanoids";
  const title = "Team members";

  return (
    <>
      <Subheader
        buttonLabel={buttonLabel}
        setIsModalActive={setIsModalActive}
        subtitle={subtitle}
        title={title}
      />

      <Modal isActive={isModalActive} onClose={handleClose} dialogHeaderTitle={dialogHeaderTitle}>
        <DialogNewTeamMember
          onClick={(event) => event.stopPropagation()}
          onClose={handleClose}
          dialogHeaderTitle={dialogHeaderTitle}
        />
      </Modal>

      {teamMembers.map((teamMember) => {
        return <TeamMember teamMember={teamMember} />;
      })}
    </>
  );
};
