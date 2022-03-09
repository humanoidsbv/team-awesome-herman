import React, { PointerEvent, useContext, useRef, useState } from "react";

import { addTimeEntry } from "../../services/time-entry-api/add-time-entry";
import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";
import { StoreContext } from "../../providers/StoreProvider";

import * as Styled from "./DialogNewTimeEntry.styled";
import * as Types from "../../types/TimeEntry.types";

interface DialogNewTimeEntryProps {
  dialogHeaderTitle: string;
  onClick: (event: PointerEvent) => void;
  onClose: () => void;
}

interface inputValidityProps {
  activity: boolean;
  client: boolean;
  date: boolean;
  timeFrom: boolean;
  timeTo: boolean;
}

export const DialogNewTimeEntry = ({ dialogHeaderTitle, onClose }: DialogNewTimeEntryProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntryProps>(
    {} as Types.TimeEntryProps,
  );

  const formRef = useRef<HTMLFormElement | null>(null);

  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [inputValidity, setInputValidity] = useState<inputValidityProps>({} as inputValidityProps);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setInputValidity({ ...inputValidity, [target.name]: target.checkValidity() });
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    const startTimestamp = new Date(`${newTimeEntry.timeFrom} ${newTimeEntry.date}`).toISOString();
    const stopTimestamp = new Date(`${newTimeEntry.timeTo} ${newTimeEntry.date}`).toISOString();

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
      <DialogHeader onClose={onClose} dialogHeaderTitle={dialogHeaderTitle} />

      <form ref={formRef}>
        <label>Client</label>
        <input
          name="client"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.client}
        />
        {inputValidity.client === false && <span>Required field.</span>}
        <label>Activity</label>
        <input
          name="activity"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.activity}
        />
        {inputValidity.activity === false && <span>Required field.</span>}
        <Styled.FormDateTime>
          <Styled.FormDate>
            <label>Date</label>
            <input
              name="date"
              onChange={handleChange}
              required
              type="date"
              value={newTimeEntry.date}
            />
            {inputValidity.date === false && <span>Required field.</span>}
          </Styled.FormDate>
          <Styled.FormTimeFrom>
            <label>From</label>
            <input
              name="timeFrom"
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.timeFrom}
            />
            {inputValidity.timeFrom === false && <span>Required field.</span>}
          </Styled.FormTimeFrom>
          <Styled.FormTimeTo>
            <label>To</label>
            <input
              name="timeTo"
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.timeTo}
            />
            {inputValidity.timeTo === false && <span>Required field.</span>}
          </Styled.FormTimeTo>
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
