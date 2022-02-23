import React, { useState, useRef } from "react";

import { DialogButtons } from "./DialogButtons";
import { DialogHeader } from "./DialogHeader";

import * as Styled from "./Modal.styled";

export const Dialog = ({ onClose, setTimeEntries, timeEntries }) => {
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
    console.log(timeToISOstring);

    newTimeEntry.startTimestamp = timeFromISOstring;
    newTimeEntry.stopTimestamp = timeToISOstring;
    newTimeEntry.key = Math.random() * 1000;

    delete newTimeEntry.date;
    delete newTimeEntry.timeFrom;
    delete newTimeEntry.timeTo;

    setTimeEntries([...timeEntries, newTimeEntry]);
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
        ></input>
        <label>Activity</label>
        <input
          maxLength={20}
          minLength={3}
          name="activity"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.activity ?? ""}
        ></input>
        <Styled.FormDateTime>
          <Styled.FormDate>
            <label>Date</label>
            <input
              name="date"
              onChange={handleChange}
              required
              type="date"
              value={newTimeEntry.date ?? ""}
            ></input>
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
