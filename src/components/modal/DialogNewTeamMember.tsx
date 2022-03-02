import React, { PointerEvent, useContext, useRef, useState } from "react";

import { addTeamMember } from "../../services/team-member-api/add-team-member";
import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";
import { StoreContext } from "../providers/StoreProvider";

import * as Styled from "./DialogNewTeamMember.styled";
import * as Types from "../../types/TeamMember.types";

interface DialogTeamMembersProps {
  dialogHeaderTitle: string;
  onClick: (event: PointerEvent) => void;
  onClose: () => void;
}

interface ValidityOfInputsProps {
  firstName: boolean;
  lastName: boolean;
  emailAddress: boolean;
  label: boolean;
  employer: boolean;
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
  const [validityOfInputs, setValidityOfInputs] = useState<ValidityOfInputsProps>(
    {} as ValidityOfInputsProps,
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setValidityOfInputs({ ...validityOfInputs, [target.name]: target.checkValidity() });
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
              value={newTeamMember.firstName ?? ""}
            />

            {validityOfInputs.firstName === false && <span>Required field.</span>}
          </Styled.FirstName>
          <Styled.LastName>
            <label>Last name</label>
            <input
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.lastName ?? ""}
            />
            {validityOfInputs.lastName === false && <span>Required field.</span>}
          </Styled.LastName>
        </Styled.Name>

        <label>E-mail</label>
        <input
          name="emailAddress"
          onChange={handleChange}
          required
          type="email"
          value={newTeamMember.emailAddress ?? ""}
        />
        {validityOfInputs.emailAddress === false && <span>Required field.</span>}

        <label htmlFor="label">Label</label>
        <textarea
          id="label"
          name="label"
          onChange={handleChange}
          required
          rows={3}
          value={newTeamMember.label ?? ""}
        ></textarea>
        {validityOfInputs.label === false && <span>Required field.</span>}

        <label>Employer</label>
        <input
          name="employer"
          onChange={handleChange}
          required
          type="text"
          value={newTeamMember.employer ?? ""}
        ></input>
        {validityOfInputs.employer === false && <span>Required field.</span>}
        <Styled.RoleAndStartingDate>
          <Styled.Role>
            <label>Role</label>
            <input
              name="role"
              onChange={handleChange}
              required
              type="text"
              value={newTeamMember.role ?? ""}
            ></input>
            {validityOfInputs.role === false && <span>Required field.</span>}
          </Styled.Role>
          <Styled.StartingDate>
            <label>Starting date</label>
            <input
              name="startingDate"
              onChange={handleChange}
              required
              type="date"
              value={newTeamMember.startingDate ?? ""}
            ></input>
            {validityOfInputs.startingDate === false && <span>Required field.</span>}
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
