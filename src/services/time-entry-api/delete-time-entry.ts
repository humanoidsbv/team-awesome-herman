export const deleteTimeEntry = async (id: number) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-herman/time-entries/" + id,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
};
