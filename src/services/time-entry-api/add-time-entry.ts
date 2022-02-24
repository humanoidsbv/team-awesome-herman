export const addTimeEntry = async (newTimeEntry: any) => {
  const response = await fetch("http://localhost:3004/time-entries/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  });
  return response.json();
};
