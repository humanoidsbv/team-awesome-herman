import { NotFoundError } from "../classes/errors/NotFoundError";

export async function getTimeEntries() {
  return fetch("http://localhost:3004/time-entries/id/5", {
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
