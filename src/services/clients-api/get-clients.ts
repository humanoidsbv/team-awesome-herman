import { NotFoundError } from "../../errors/not-found-error";

export const getClients = async () => {
  return fetch("https://my-json-server.typicode.com/humanoidsbv/team-awesome-herman/clients/", {
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
