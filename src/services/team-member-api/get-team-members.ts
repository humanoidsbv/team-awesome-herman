import { NotFoundError } from "../../errors/not-found-error";

export const getTeamMembers = async () => {
  return fetch("http://localhost:3004/team-members/", {
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
};
