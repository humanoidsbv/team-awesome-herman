import React, { useState } from "react";

import { TimeEntry } from "../shared";
import { Button } from "../shared/Button";
import { TimeEntryHeader } from "../shared/TimeEntryHeader";

import importedTimeEntries from "../../fixtures/MockTimeEntries.json";

import * as Styled from "./Timesheet.styled";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(importedTimeEntries);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random() * 1000,
        client: "AIVD",
        startTimestamp: "2021-09-24T16:00:00.000Z",
        stopTimestamp: "2021-09-24T18:00:00.000Z",
      },
    ]);
  };

  timeEntries.sort(function (a, b) {
    return new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime();
  });

  return (
    <>
      {timeEntries.map((timeEntry, i, array) => {
        return (
          <React.Fragment key={timeEntry.id}>
            {array[i].startTimestamp.substring(0, 10) !==
              array[i - 1]?.startTimestamp.substring(0, 10) && (
              <TimeEntryHeader timeStamp={timeEntry.startTimestamp} />
            )}

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
