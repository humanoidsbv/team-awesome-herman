import { ChangeEvent, Fragment, SetStateAction, useContext, useState, useEffect } from "react";

import { DialogNewTimeEntry } from "../modal/DialogNewTimeEntry";
import { Modal } from "../modal/Modal";
import { StoreContext } from "../../providers/StoreProvider";
import { Subheader } from "../header/subheader/Subheader";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import { TimeEntryProps } from "../../types/TimeEntry.types";
import { ClientProps } from "../../types/Client.types";

import * as Styled from "./TimeEntries.styled";

interface TimeEntriesProps {
  clients: ClientProps[];
  initialTimeEntries: TimeEntryProps[];
}

export const TimeEntries = ({ clients, initialTimeEntries }: TimeEntriesProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [clientFilter, setClientFilter] = useState<SetStateAction<string>>("all");

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  const handleClose = () => {
    setIsModalActive(false);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
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
        <DialogNewTimeEntry onClose={handleClose} dialogHeaderTitle="New time entry" />
      </Modal>

      <Styled.ClientFilterButton>
        <select name="clientFilter" id="clientFilter" onChange={handleChange}>
          <option value="all">All clients</option>
          {clients.map((client) => {
            return (
              <option key={client.id} value={client.name}>
                {client.name}
              </option>
            );
          })}
        </select>
      </Styled.ClientFilterButton>

      {timeEntries
        .filter((timeEntry) => clientFilter === "all" || clientFilter === timeEntry.client)
        .sort(
          (a: TimeEntryProps, b: TimeEntryProps) =>
            new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime(),
        )
        .map((timeEntry: TimeEntryProps, i: number, entries) => {
          const currentDate = new Date(entries[i].startTimestamp).toLocaleDateString();
          const previousDate = new Date(entries[i - 1]?.startTimestamp).toLocaleDateString();
          const isNewDate = currentDate !== previousDate;

          return (
            <Fragment key={timeEntry.id}>
              {isNewDate && <TimeEntryHeader timeStamp={timeEntry.startTimestamp} />}

              <TimeEntry key={timeEntry.id} timeEntry={timeEntry} />
            </Fragment>
          );
        })}
    </>
  );
};
