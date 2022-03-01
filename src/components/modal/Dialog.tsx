import React, { useState, useRef, useContext, LegacyRef } from "react";

import { addTimeEntry } from "../../services/time-entry-api/add-time-entry";
import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";
import { StoreContext } from "../providers/StoreProvider";

import * as Styled from "./Modal.styled";
import * as Types from "../../types/TimeEntry.types";

interface DialogProps {
  onClick: () => void;
  onClose: () => void;
}

interface ValidityOfInputsProps {
  client: boolean;
  activity: boolean;
  date: boolean;
  timeTo: boolean;
  timeFrom: boolean;
}

export const Dialog = ({ onClose }: DialogProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntryProps>(
    {} as Types.TimeEntryProps,
  );
  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [validityOfInputs, setValidityOfInputs] = useState<ValidityOfInputsProps>(
    {} as ValidityOfInputsProps,
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setValidityOfInputs({ ...validityOfInputs, [target.name]: target.checkValidity() });
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    const startTimestamp = new Date(newTimeEntry.timeFrom + " " + newTimeEntry.date).toISOString();
    const stopTimestamp = new Date(newTimeEntry.timeTo + " " + newTimeEntry.date).toISOString();

    const newTimeEntryFormatted = {
      ...newTimeEntry,
      startTimestamp,
      stopTimestamp,
    };

    delete newTimeEntryFormatted.timeFrom;
    delete newTimeEntryFormatted.timeTo;

    const addedTimeEntry = await addTimeEntry(newTimeEntryFormatted);

    if (addedTimeEntry) {
      setTimeEntries([...timeEntries, addedTimeEntry]);
    }
    setNewTimeEntry({} as Types.TimeEntryProps);
  };

  return (
    <Styled.Dialog
      aria-labelledby="dialog"
      aria-modal="true"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
    >
      <DialogHeader onClose={onClose} />

      <form ref={formRef}>
        <label>Client</label>
        <input
          name="client"
          onChange={handleChange}
          placeholder="Client"
          required
          type="text"
          value={newTimeEntry.client ?? ""}
        />
        {!validityOfInputs.client && <span>Required field.</span>}
        <label>Activity</label>
        <input
          name="activity"
          onChange={handleChange}
          placeholder="Activity"
          required
          type="text"
          value={newTimeEntry.activity ?? ""}
        />
        {!validityOfInputs.activity && <span>Required field.</span>}
        <Styled.FormDateTime>
          <Styled.FormDate>
            <label>Date</label>
            <input
              name="date"
              onChange={handleChange}
              required
              type="date"
              value={newTimeEntry.date ?? ""}
            />
            {!validityOfInputs.date && <span>Required field.</span>}
          </Styled.FormDate>
          <Styled.FormTimeFrom>
            <label>From</label>
            <input
              name="timeFrom"
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.timeFrom ?? ""}
            ></input>
            {!validityOfInputs.timeFrom && <span>Required field.</span>}
          </Styled.FormTimeFrom>
          <Styled.FormTimeTo>
            <label>To</label>
            <input
              name="timeTo"
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.timeTo ?? ""}
            ></input>
            {!validityOfInputs.timeTo && <span>Required field.</span>}
          </Styled.FormTimeTo>
          <Styled.FormTimeDuration>Total Placeholder</Styled.FormTimeDuration>
        </Styled.FormDateTime>
      </form>

      <Styled.DialogButtons>
        <Button icon={false} label="Cancel" onClick={onClose} variety="secondary" />
        <Button
          icon={false}
          label="Add time entry"
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </Styled.DialogButtons>
    </Styled.Dialog>
  );
};
