import React, { useState } from "react";

import { DialogButtons } from "./DialogButtons";
import { DialogHeader } from "./DialogHeader";

import * as Styled from "./Modal.styled";

export const Dialog = ({ onClose, setTimeEntries, timeEntries }) => {
  const [newTimeEntry, setNewTimeEntry] = useState({});

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const handleSubmit = () => {
    const timeFromISOstring = new Date(
      newTimeEntry.timeFrom + " " + newTimeEntry.date,
    ).toISOString();
    const timeToISOstring = new Date(newTimeEntry.timeTo + " " + newTimeEntry.date).toISOString();

    newTimeEntry.startTimestamp = timeFromISOstring;
    newTimeEntry.stopTimestamp = timeToISOstring;
    newTimeEntry.key = Math.random() * 1000;

    delete newTimeEntry.date;
    delete newTimeEntry.timeFrom;
    delete newTimeEntry.timeTo;

    setTimeEntries([...timeEntries, newTimeEntry]);
    setNewTimeEntry({});
    console.log(timeEntries);
  };

  return (
    <Styled.Dialog
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-labelledby="dialog"
      aria-modal="true"
    >
      <DialogHeader onClose={onClose} />
      <form>
        <label>Client</label>
        <input
          name="client"
          type="text"
          value={newTimeEntry.client ?? ""}
          onChange={handleChange}
        ></input>
        <label>Activity</label>
        <input
          name="activity"
          type="text"
          value={newTimeEntry.activity ?? ""}
          onChange={handleChange}
        ></input>
        <Styled.FormDateTime>
          <Styled.FormDate>
            <label>Date</label>
            <input
              name="date"
              type="date"
              value={newTimeEntry.date ?? ""}
              onChange={handleChange}
            ></input>
          </Styled.FormDate>
          <Styled.FormTimeFrom>
            <label>From</label>
            <input
              name="timeFrom"
              type="time"
              value={newTimeEntry.timeFrom ?? ""}
              onChange={handleChange}
            ></input>
          </Styled.FormTimeFrom>
          <Styled.FormTimeTo>
            <label>To</label>
            <input
              name="timeTo"
              type="time"
              value={newTimeEntry.timeTo ?? ""}
              onChange={handleChange}
            ></input>
          </Styled.FormTimeTo>
          <Styled.FormTimeDuration>
            <span>Total</span>
            <span>08:00</span>
          </Styled.FormTimeDuration>
        </Styled.FormDateTime>
      </form>

      <DialogButtons onClose={onClose} handleSubmit={handleSubmit} onClick={onClose} />
    </Styled.Dialog>
  );
};
