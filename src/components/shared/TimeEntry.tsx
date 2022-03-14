import { useContext } from "react";

import { deleteTimeEntry } from "../../services/time-entry-api/delete-time-entry";
import { StoreContext } from "../../providers/StoreProvider";
import { TimeEntryProps } from "../../types/TimeEntry.types";
import DeleteIconWrapper from "../../../public/assets/icons/bin.svg";

import * as Styled from "./TimeEntry.styled";

interface ITimeEntry {
  timeEntry: TimeEntryProps;
}

export const TimeEntry = ({ timeEntry }: ITimeEntry) => {
  const { client, startTimestamp, stopTimestamp, id } = timeEntry;
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const startDate = new Date(startTimestamp);
  const formattedStartTime = startDate.toLocaleTimeString("nl-NL", timeFormat);

  const stopDate = new Date(stopTimestamp);
  const formattedStopTime = stopDate.toLocaleTimeString("nl-NL", timeFormat);

  const diff = Math.abs(startDate.getTime() - stopDate.getTime());
  const totalMinutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const state = useContext(StoreContext);
  const [, setTimeEntries] = state.timeEntries;

  const removeTimeEntry = () => {
    setTimeEntries((timeEntries: TimeEntryProps[]) =>
      timeEntries.filter((entry: { id: number }) => entry.id !== id),
    );
    deleteTimeEntry(id);
  };

  return (
    <Styled.TimeEntry>
      <span>{client}</span>
      <Styled.TimeRange>
        <span>
          {formattedStartTime} - {formattedStopTime}
        </span>
        <Styled.Duration>
          <span>
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
          </span>
        </Styled.Duration>
      </Styled.TimeRange>
      <Styled.DeleteIconWrapper onClick={removeTimeEntry}>
        <DeleteIconWrapper />
      </Styled.DeleteIconWrapper>
    </Styled.TimeEntry>
  );
};
