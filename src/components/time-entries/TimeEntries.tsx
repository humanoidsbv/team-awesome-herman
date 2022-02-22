import React, { useEffect, useState } from "react";

import { Modal } from "../modal/Modal";
import { NotFoundError } from "../../errors/not-found-error";
import { Subheader } from "../header/subheader/Subheader";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import { getTimeEntries } from "../../services/time-entries-api";

import * as Styled from "./TimeEntries.styled";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClose = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  async function fetchTimeEntries() {
    const timeEntriesFetched = await getTimeEntries();

    if (timeEntriesFetched instanceof NotFoundError) {
      return;
    }

    setTimeEntries(timeEntriesFetched);
  }

  return (
    <>
      <Styled.Modal>
        <Modal
          isActive={isModalActive}
          onClose={handleClose}
          setTimeEntries={setTimeEntries}
          timeEntries={timeEntries}
        >
          <p>Hi viewers!</p>
        </Modal>
      </Styled.Modal>

      <Subheader handleButtonClick={setIsModalActive} />

      {timeEntries
        .sort((a, b) => new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime())
        .map((timeEntry, i) => {
          const currentDate = new Date(timeEntries[i].startTimestamp).toLocaleDateString();
          const previousDate = new Date(timeEntries[i - 1]?.startTimestamp).toLocaleDateString();
          const isNewDate = currentDate !== previousDate;

          return (
            <React.Fragment key={timeEntry.id}>
              {isNewDate && <TimeEntryHeader timeStamp={timeEntry.startTimestamp} />}

              <TimeEntry
                client={timeEntry.client}
                key={timeEntry.id}
                startTime={timeEntry.startTimestamp}
                stopTime={timeEntry.stopTimestamp}
              />
            </React.Fragment>
          );
        })}
    </>
  );
};
