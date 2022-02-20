import React, { useEffect, useState } from "react";

import { Button } from "../shared/Button";
import { getTimeEntries } from "../../services/time-entries-api";
import { notFoundError } from "../../errors/not-found-error";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import * as Styled from "./TimeEntries.styled";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  async function fetchTimeEntries() {
    const timeEntriesFetched = await getTimeEntries();

    if (timeEntriesFetched instanceof notFoundError) {
      return;
    }

    setTimeEntries(timeEntriesFetched);
  }

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random() * 1000,
        client: "Uber",
        startTimestamp: "2021-09-24T16:00:00.000Z",
        stopTimestamp: "2021-09-24T18:00:00.000Z",
      },
    ]);
  };

  return (
    <>
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
      <Styled.AddEntryButton>
        <Button onClick={handleClick} label="Add time entry" icon />
      </Styled.AddEntryButton>
    </>
  );
};
