import { NotFoundError } from "../../errors/not-found-error";

export const getClients = async () => {
  return fetch("http://localhost:3004/clients/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.toString());
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
};
