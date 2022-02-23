import { NotFoundError } from "../errors/not-found-error";

export async function getTimeEntries() {
  return fetch("http://localhost:3004/time-entries/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response);
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}

export const addTimeEntry = async (newTimeEntry: TimeEntry) => {
  const response = await fetch("http://localhost:3004/time-entries/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  });
  return response.json();
};
