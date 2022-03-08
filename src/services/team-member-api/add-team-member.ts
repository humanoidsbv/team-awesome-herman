interface TeamMemberProps {
  emailAddress: string;
  client: string;
  firstName: string;
  function: string;
  id: number;
  label: string;
  lastName: string;
  role: string;
  startingDate: string;
}

export const addTeamMember = async (newTeamMember: TeamMemberProps) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-herman/team-members/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeamMember),
    },
  );
  return response.json();
};
