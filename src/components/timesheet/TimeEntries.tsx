import React, { useState } from "react";

import { TimeEntry } from "../shared";
import { Button } from "../shared/Button";
import { TimeEntryHeader } from "./TimeEntryHeader";

import timeEntriesData from "../../fixtures/MockTimeEntries.json";
import * as Styled from "./Timesheet.styled";
import { time } from "console";

export const TimeEntries = () => {
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

  timeEntries.sort(function (a, b) {
    return new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime();
  });

  return (
    <>
      {timeEntries.map((timeEntry, i, array) => {
        return (
          <>
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
          </>
        );
      })}
      <Styled.AddEntryButton>
        <Button onClick={handleClick} label="Add time entry" icon />
      </Styled.AddEntryButton>
    </>
  );
};
