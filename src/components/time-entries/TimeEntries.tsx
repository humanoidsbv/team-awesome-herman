import React, { useState, useContext } from "react";

import { Modal } from "../modal/Modal";
import { Subheader } from "../header/subheader/Subheader";
import { StoreContext } from "../providers/StoreProvider";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import { TimeEntryProps } from "../../types/TimeEntry.types";

export const TimeEntries = (props: { timeEntries: TimeEntryProps[] }) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Modal
        isActive={isModalActive}
        onClose={handleClose}
        setTimeEntries={setTimeEntries}
        timeEntries={timeEntries}
      />

      <Subheader setIsModalActive={setIsModalActive} timeEntries={timeEntries} />

      {timeEntries
        .sort(
          (a: any, b: any) =>
            new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime(),
        )
        .map(
          (
            timeEntry: {
              client: string;
              id: number;
              startTimestamp: string;
              stopTimestamp: string;
            },
            i: number,
          ) => {
            const currentDate = new Date(timeEntries[i].startTimestamp).toLocaleDateString();
            const previousDate = new Date(timeEntries[i - 1]?.startTimestamp).toLocaleDateString();
            const isNewDate = currentDate !== previousDate;

            return (
              <React.Fragment key={timeEntry.id}>
                {isNewDate && <TimeEntryHeader timeStamp={timeEntry.startTimestamp} />}

                <TimeEntry timeEntry={timeEntry} setTimeEntries={setTimeEntries} />
              </React.Fragment>
            );
          },
        )}
    </>
  );
};
