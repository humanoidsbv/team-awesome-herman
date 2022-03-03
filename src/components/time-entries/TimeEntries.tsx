import React, { useContext, useState, useEffect } from "react";

import { DialogNewTimeEntry } from "../modal/DialogNewTimeEntry";

import { Modal } from "../modal/Modal";
import { StoreContext } from "../../providers/StoreProvider";
import { Subheader } from "../header/subheader/Subheader";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import { InitialTimeEntryProps } from "../../../pages/index";
import { TimeEntryProps } from "../../types/TimeEntry.types";

export const TimeEntries = ({ initialTimeEntries }: InitialTimeEntryProps) => {
  const state = useContext(StoreContext);

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [timeEntries, setTimeEntries] = state.timeEntries;

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  return (
    <>
      <Subheader
        buttonLabel={"Add new time entry"}
        setIsModalActive={setIsModalActive}
        subtitle={timeEntries.length + " entries"}
        title={"Time entries"}
      />

      <Modal isActive={isModalActive} onClose={handleClose}>
        <DialogNewTimeEntry
          onClick={(event) => event.stopPropagation()}
          onClose={handleClose}
          dialogHeaderTitle={"New time entry"}
        />
      </Modal>

      {timeEntries
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
