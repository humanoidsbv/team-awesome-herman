import React, { useContext } from "react";

import * as Styled from "../time-entries/TimeEntries.styled";

import { StoreContext } from "../../providers/StoreProvider";

import { TimeEntryProps } from "../../types/TimeEntry.types";

interface TimeEntryHeaderProps {
  timeStamp: string;
}

export const TimeEntryHeader = ({ timeStamp }: TimeEntryHeaderProps) => {
  const state = useContext(StoreContext);
  const [timeEntries] = state.timeEntries;

  const dateFormatted = new Date(timeStamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const getDurationByDay = (timeStamp: string, timeEntries: TimeEntryProps[]) => {
    const calculateDuration = ({ stopTimestamp, startTimestamp }: TimeEntryProps) => {
      return new Date(stopTimestamp) - new Date(startTimestamp);
    };

    const duration = new Date(
      timeEntries
        .filter(
          ({ startTimestamp }) =>
            new Date(startTimestamp).toDateString() === new Date(timeStamp).toDateString(),
        )
        .reduce((acc, timeEntry) => acc + calculateDuration(timeEntry), 0),
    );

    // console.log("hello" + timeEntry);

    return formatDuration(duration);
  };

  const formatDuration = (duration: Date) => {
    const hours = Number.parseInt(duration / 1000 / 60 / 60).toString();
    const minutes = Number.parseInt((duration / 1000 / 60) % 60).toString();
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };

  return (
    <Styled.TimeEntryHeader>
      <span>{dateFormatted}</span>
      <span>{getDurationByDay(timeStamp, timeEntries)}</span>
    </Styled.TimeEntryHeader>
  );
};
