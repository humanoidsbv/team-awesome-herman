import React, { useContext, useState, useEffect } from "react";

import { DialogNewTeamMember } from "../modal/DialogNewTeamMember";

import { Modal } from "../modal/Modal";
import { StoreContext } from "../../providers/StoreProvider";
import { Subheader } from "../header/subheader/Subheader";
import { TeamMember } from "./TeamMember";

import { InitialTeamMembersProps } from "../../../pages/team-members";

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

  return (
    <>
      <Subheader
        buttonLabel={"New Humanoid"}
        setIsModalActive={setIsModalActive}
        subtitle={teamMembers.length + " Humanoids"}
        title={"Team members"}
      />

      <Modal isActive={isModalActive} onClose={handleClose}>
        <DialogNewTeamMember
          onClick={(event) => event.stopPropagation()}
          onClose={handleClose}
          dialogHeaderTitle={"New Humanoid"}
        />
      </Modal>

      {teamMembers.map((teamMember) => {
        return <TeamMember teamMember={teamMember} />;
      })}
    </>
  );
};
