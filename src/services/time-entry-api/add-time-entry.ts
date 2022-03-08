interface TimeEntryProps {
  client: string;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
}

export const addTimeEntry = async (newTimeEntry: TimeEntryProps) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-herman/time-entries/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTimeEntry),
    },
  );
  return response.json();
};
