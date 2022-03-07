import React, { useContext, useState, useEffect } from "react";

import { DialogNewTimeEntry } from "../modal/DialogNewTimeEntry";

import { Modal } from "../modal/Modal";
import { StoreContext } from "../../providers/StoreProvider";
import { Subheader } from "../header/subheader/Subheader";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import { InitialTimeEntryProps } from "../../../pages/index";
import { TimeEntryProps } from "../../types/TimeEntry.types";

import * as Styled from "./TimeEntries.styled";

export const TimeEntries = ({ initialTimeEntries }: InitialTimeEntryProps) => {
  const state = useContext(StoreContext);

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [clientFilter, setClientFilter] = useState<React.SetStateAction<string>>();

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  const clients = timeEntries.map((entry) => entry.client);
  const uniqueClients = Array.from(new Set(clients));

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setClientFilter(target.value);
  };

  return (
    <>
      <Subheader
        buttonLabel="Add new time entry"
        setIsModalActive={setIsModalActive}
        subtitle={`${timeEntries.length} entries`}
        title="Timesheets"
      />

      <Modal isActive={isModalActive} onClose={handleClose}>
        <DialogNewTimeEntry
          onClick={(event) => event.stopPropagation()}
          onClose={handleClose}
          dialogHeaderTitle="New time entry"
        />
      </Modal>

      <Styled.ClientFilterButton>
        <label htmlFor="clientFilter">Filter by client:</label>

        <select name="clientFilter" id="clientFilter" onChange={handleChange}>
          <option value="all">All clients</option>
          {uniqueClients.map((client) => {
            return <option value={client}>{client}</option>;
          })}
        </select>
      </Styled.ClientFilterButton>

      {timeEntries
        .filter((timeEntry) =>
          clientFilter === undefined || clientFilter === "all"
            ? timeEntry.client === timeEntry.client
            : clientFilter === timeEntry.client,
        )
        .sort(
          (a: TimeEntryProps, b: TimeEntryProps) =>
            new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime(),
        )
        .map((timeEntry: TimeEntryProps, i: number) => {
          const currentDate = new Date(timeEntries[i].startTimestamp).toLocaleDateString();
          const previousDate = new Date(timeEntries[i - 1]?.startTimestamp).toLocaleDateString();
          const isNewDate = currentDate !== previousDate;

          return (
            <React.Fragment key={timeEntry.id}>
              {isNewDate && <TimeEntryHeader timeStamp={timeEntry.startTimestamp} />}

              <TimeEntry timeEntry={timeEntry} />
            </React.Fragment>
          );
        })}
    </>
  );
};
