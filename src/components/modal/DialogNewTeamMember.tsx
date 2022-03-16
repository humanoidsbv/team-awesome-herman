import { ChangeEvent, useContext, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { StoreContext } from "../../providers/StoreProvider";

import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";

import { CREATE_TEAM_MEMBER } from "../../services/mutations";

import * as Styled from "./DialogNewTeamMember.styled";
import * as Types from "../../types/TeamMember.types";

interface DialogTeamMembersProps {
  dialogHeaderTitle: string;
  onClose: () => void;
}

interface inputValidityProps {
  emailAddress: boolean;
  client: boolean;
  firstName: boolean;
  label: boolean;
  lastName: boolean;
  role: boolean;
  startingDate: boolean;
}

export const DialogNewTeamMember = ({ dialogHeaderTitle, onClose }: DialogTeamMembersProps) => {
  const [newTeamMember, setNewTeamMember] = useState<Types.TeamMemberProps>(
    {} as Types.TeamMemberProps,
  );

  const state = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = state.teamMembers;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [inputValidity, setInputValidity] = useState<inputValidityProps>({} as inputValidityProps);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setInputValidity({ ...inputValidity, [target.name]: target.checkValidity() });
    setNewTeamMember({ ...newTeamMember, [target.name]: target.value });
  };

  const [addTeamMember] = useMutation(CREATE_TEAM_MEMBER, {
    onCompleted: async ({ createTeamMember }) => {
      setTeamMembers([...teamMembers, createTeamMember]);
    },
  });

  const handleSubmit = async () => {
    await addTeamMember({
      variables: {
        emailAddress: newTeamMember.emailAddress,
        label: newTeamMember.label,
        client: newTeamMember.client,
        role: newTeamMember.role,
        firstName: newTeamMember.firstName,
        lastName: newTeamMember.lastName,
        startingDate: newTeamMember.startingDate,
      },
    });
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
            <label htmlFor="firstName">
              First name
              <input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                required
                type="text"
                value={newTeamMember.firstName || ""}
              />
            </label>
            {inputValidity.firstName === false && <span>Required field.</span>}
          </Styled.FirstName>

          <Styled.LastName>
            <label htmlFor="lastName">
              Last name
              <input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                required
                type="text"
                value={newTeamMember.lastName || ""}
              />
            </label>

            {inputValidity.lastName === false && <span>Required field.</span>}
          </Styled.LastName>
        </Styled.Name>

        <label htmlFor="emailAddress">
          E-mail
          <input
            id="emailAddress"
            name="emailAddress"
            onChange={handleChange}
            required
            type="email"
            value={newTeamMember.emailAddress || ""}
          />
        </label>
        {inputValidity.emailAddress === false && <span>Required field.</span>}

        <label htmlFor="label">
          Label
          <textarea
            id="label"
            name="label"
            onChange={handleChange}
            required
            rows={3}
            value={newTeamMember.label || ""}
          />
        </label>
        {inputValidity.label === false && <span>Required field.</span>}

        <label htmlFor="client">
          Client
          <input
            id="client"
            name="client"
            onChange={handleChange}
            required
            type="text"
            value={newTeamMember.client || ""}
          />
        </label>
        {inputValidity.client === false && <span>Required field.</span>}

        <Styled.RoleAndStartingDate>
          <Styled.Role>
            <label htmlFor="role">
              Role
              <input
                id="role"
                name="role"
                onChange={handleChange}
                required
                type="text"
                value={newTeamMember.role || ""}
              />
            </label>
            {inputValidity.role === false && <span>Required field.</span>}
          </Styled.Role>

          <Styled.StartingDate>
            <label htmlFor="startingDate">
              Starting date
              <input
                id="startingDate"
                name="startingDate"
                onChange={handleChange}
                required
                type="date"
                value={newTeamMember.startingDate || ""}
              />
            </label>
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
