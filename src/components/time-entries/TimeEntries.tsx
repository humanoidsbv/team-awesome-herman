import React, { useEffect, useState } from "react";

import { Modal } from "../modal/Modal";
import { Subheader } from "../header/subheader/Subheader";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

export const TimeEntries = (props) => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    setTimeEntries(props.timeEntries);
  }, []);

  return (
    <>
      <Modal
        isActive={isModalActive}
        onClose={handleClose}
        setTimeEntries={setTimeEntries}
        timeEntries={timeEntries}
      />

      <Subheader setIsModalActive={setIsModalActive} />

      {timeEntries
        .sort(
          (a: any, b: any) =>
            new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime(),
        )
        .map((timeEntry: any, i) => {
          const currentDate = new Date(timeEntries[i].startTimestamp).toLocaleDateString();
          const previousDate = new Date(timeEntries[i - 1]?.startTimestamp).toLocaleDateString();
          const isNewDate = currentDate !== previousDate;

          return (
            <React.Fragment key={timeEntry.id}>
              {isNewDate && <TimeEntryHeader timeStamp={timeEntry.startTimestamp} />}

              <TimeEntry timeEntry={timeEntry} setTimeEntries={setTimeEntries} />
            </React.Fragment>
          );
        })}
    </>
  );
};
