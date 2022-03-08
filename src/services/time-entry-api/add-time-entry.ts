interface TimeEntryProps {
  client: string;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
}

export const addTimeEntry = async (newTimeEntry: TimeEntryProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  });
  return response.json();
};
