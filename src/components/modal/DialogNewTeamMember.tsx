import React, { PointerEvent, useContext, useRef, useState } from "react";

import { addTeamMember } from "../../services/team-member-api/add-team-member";
import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";
import { StoreContext } from "../../providers/StoreProvider";

import * as Styled from "./DialogNewTeamMember.styled";
import * as Types from "../../types/TeamMember.types";

interface DialogTeamMembersProps {
  dialogHeaderTitle: string;
  onClick: (event: PointerEvent) => void;
  onClose: () => void;
}

interface inputValidityProps {
  emailAddress: boolean;
  employer: boolean;
  firstName: boolean;
  label: boolean;
  lastName: boolean;
  role: boolean;
  startingDate: boolean;
}

export const DialogNewTeamMember = ({ dialogHeaderTitle, onClose }: DialogTeamMembersProps) => {
  const state = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = state.teamMembers;

  const [newTeamMember, setNewTeamMember] = useState<Types.TeamMemberProps>(
    {} as Types.TeamMemberProps,
  );

  const formRef = useRef<HTMLFormElement | null>(null);

  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [inputValidity, setInputValidity] = useState<inputValidityProps>({} as inputValidityProps);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setInputValidity({ ...inputValidity, [target.name]: target.checkValidity() });
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    const addedTeamMember = await addTeamMember(newTeamMember);

    if (addedTeamMember) {
      setTeamMembers([...teamMembers, addedTeamMember]);
    }

    setNewTeamMember({} as Types.TeamMemberProps);
  };

  return (
    <Styled.Dialog
      aria-labelledby="dialog"
      aria-modal="true"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
    >
      <DialogHeader onClose={onClose} dialogHeaderTitle={dialogHeaderTitle} />
      <Styled.Profile>
        <Styled.Avatar />
        <Styled.EditAvatar>Edit Avatar</Styled.EditAvatar>
      </Styled.Profile>

      <form ref={formRef}>
        <Styled.Name>
          <Styled.FirstName>
            <label>First name</label>
            <input
              name="firstName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.firstName}
            />
            {inputValidity.firstName === false && <span>Required field.</span>}
          </Styled.FirstName>
          <Styled.LastName>
            <label>Last name</label>
            <input
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.lastName}
            />
            {inputValidity.lastName === false && <span>Required field.</span>}
          </Styled.LastName>
        </Styled.Name>

        <label>E-mail</label>
        <input
          name="emailAddress"
          onChange={handleChange}
          required
          type="email"
          value={newTeamMember.emailAddress}
        />
        {inputValidity.emailAddress === false && <span>Required field.</span>}

        <label htmlFor="label">Label</label>
        <textarea
          id="label"
          name="label"
          onChange={handleChange}
          required
          rows={3}
          value={newTeamMember.label}
        ></textarea>
        {inputValidity.label === false && <span>Required field.</span>}

        <label>Client</label>
        <input
          name="client"
          onChange={handleChange}
          required
          type="text"
          value={newTeamMember.client}
        ></input>
        {inputValidity.client === false && <span>Required field.</span>}

        <Styled.RoleAndStartingDate>
          <Styled.Role>
            <label>Role</label>
            <input
              name="role"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.role}
            ></input>
            {inputValidity.role === false && <span>Required field.</span>}
          </Styled.Role>
          <Styled.StartingDate>
            <label>Starting date</label>
            <input
              name="startingDate"
              onChange={handleChange}
              required
              type="date"
              value={newTeamMember.startingDate}
            ></input>
            {inputValidity.startingDate === false && <span>Required field.</span>}
          </Styled.StartingDate>
        </Styled.RoleAndStartingDate>
      </form>

      <Styled.DialogButtons>
        <Button icon={false} label="Cancel" onClick={onClose} variety="secondary" />
        <Button icon={false} label="Add Humanoid" onClick={handleSubmit} disabled={!isFormValid} />
      </Styled.DialogButtons>
    </Styled.Dialog>
  );
};
