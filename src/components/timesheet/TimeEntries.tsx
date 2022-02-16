import React, { useState } from "react";

import { TimeEntry } from "../shared";
import { Button } from "../shared/Button";
import { TimeEntryHeader } from "./TimeEntryHeader";

import timeEntriesData from "../../fixtures/MockTimeEntries.json";

export const TimeEntries = (setTotalMinutes) => {
  const [timeEntries, setTimeEntries] = useState(timeEntriesData);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: 0.8524250995148188,
        client: "Port of Rotterdam",
        startTimestamp: "2019-09-26T16:00:00.000Z",
        stopTimestamp: "2019-09-26T18:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      {timeEntries.map((timeEntry) => (
        <>
          <TimeEntryHeader />
          <TimeEntry
            client={timeEntry.client}
            key={timeEntry.id}
            startTime={timeEntry.startTimestamp}
            stopTime={timeEntry.stopTimestamp}
          />
        </>
      ))}
      <Button onClick={handleClick} label="Add time entry" icon />
    </>
  );
};
