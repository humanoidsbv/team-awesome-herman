import React, { useEffect, useState } from "react";

import { getTimeEntries } from "../../services/time-entries-api";
import { NotFoundError } from "../../errors/not-found-error";
import { TimeEntry } from "../shared";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([]);

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
