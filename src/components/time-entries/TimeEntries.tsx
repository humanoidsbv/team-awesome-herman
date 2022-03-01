import React, { useState, useContext, useEffect } from "react";

import { Modal } from "../modal/Modal";
import { Subheader } from "../header/subheader/Subheader";
import { StoreContext } from "../providers/StoreProvider";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import { TimeEntryProps } from "../../types/TimeEntry.types";
import { InitialTimeEntryProps } from "../../../pages/index";

export const TimeEntries = ({ initialTimeEntries }: InitialTimeEntryProps) => {
  const state = useContext(StoreContext);

  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  return (
    <>
      <Modal isActive={isModalActive} onClose={handleClose} />

      <Subheader setIsModalActive={setIsModalActive} />

      {timeEntries
        .sort(
          (a: any, b: any) =>
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
