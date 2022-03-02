interface TeamMemberProps {
  firstName: string;
  lastName: string;
  id: number;
  emailAddress: string;
  function: string;
  label: string;
  employer: string;
  role: string;
  startingDate: string;
}

export const addTeamMember = async (newTeamMember: TeamMemberProps) => {
  const response = await fetch("http://localhost:3004/team-members/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
  });
  return response.json();
};
