import React, { useState, useRef } from "react";

import { addTimeEntry } from "../../services/time-entries-api";

import { DialogButtons } from "./DialogButtons";
import { DialogHeader } from "./DialogHeader";

import * as Styled from "./Modal.styled";

interface DialogProps {
  onClose: () => void;
}

export const Dialog = ({ onClose, setTimeEntries, timeEntries }: DialogProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState({});
  const [isFormValid, setIsFormValid] = useState();

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = () => {
    const timeFromISOstring = new Date(
      newTimeEntry.timeFrom + " " + newTimeEntry.date,
    ).toISOString();
    const timeToISOstring = new Date(newTimeEntry.timeTo + " " + newTimeEntry.date).toISOString();

    const newTimeEntryFormatted = {
      ...newTimeEntry,
      startTimestamp: timeFromISOstring,
      stopTimestamp: timeToISOstring,
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
          maxLength={20}
          minLength={3}
          name="client"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.client ?? ""}
        />
        <label>Activity</label>
        <input
          maxLength={20}
          minLength={3}
          name="activity"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.activity ?? ""}
        />
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
          </Styled.FormTimeTo>
          <Styled.FormTimeDuration>
            <span>Total</span>
            <span>08:00</span>
          </Styled.FormTimeDuration>
        </Styled.FormDateTime>
      </form>

      <DialogButtons
        onClose={onClose}
        handleSubmit={handleSubmit}
        onClick={onClose}
        isFormValid={isFormValid}
      />
    </Styled.Dialog>
  );
};
