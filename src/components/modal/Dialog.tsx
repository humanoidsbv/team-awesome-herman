import React, { useState, useRef } from "react";

import { addTimeEntry } from "../../services/time-entries-api";
import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";

import * as Styled from "./Modal.styled";

interface DialogProps {
  onClose: () => void;
  setTimeEntries: React.Dispatch<React.SetStateAction<{}>>;
  timeEntries: {}[];
}

export const Dialog = ({ onClose, setTimeEntries, timeEntries }: DialogProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [validityOfInputs, setValidityOfInputs] = useState({});
  const formRef = useRef<HTMLFormElement>();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setValidityOfInputs({ ...validityOfInputs, [target.name]: target.checkValidity() });

    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = () => {
    const startTimestamp = new Date(newTimeEntry.timeFrom + " " + newTimeEntry.date).toISOString();
    const stopTimestamp = new Date(newTimeEntry.timeTo + " " + newTimeEntry.date).toISOString();

    const newTimeEntryFormatted = {
      ...newTimeEntry,
      startTimestamp,
      stopTimestamp,
    };

    delete newTimeEntryFormatted.timeFrom;
    delete newTimeEntryFormatted.timeTo;

    setTimeEntries([...timeEntries, newTimeEntryFormatted]);
    addTimeEntry(newTimeEntryFormatted);
    setNewTimeEntry({});
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
          required
          type="text"
          value={newTimeEntry.client ?? ""}
        />
        {!validityOfInputs.client && <span>Required field.</span>}
        <label>Activity</label>
        <input
          name="activity"
          onChange={handleChange}
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
