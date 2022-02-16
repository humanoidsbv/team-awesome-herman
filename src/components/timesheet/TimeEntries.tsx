import { TimeEntry } from "../shared";

import timeEntries from "../../fixtures/MockTimeEntries.json";

interface TimeEntries {
  client: string;
  id: number;
  duration: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntries = () => {
  return timeEntries.map((timeEntry: TimeEntries) => (
    <TimeEntry
      client={timeEntry.client}
      duration={timeEntry.duration}
      id={timeEntry.id}
      startTime={timeEntry.startTimestamp}
      stopTime={timeEntry.stopTimestamp}
    />
  ));
};
