interface TeamMemberProps {
  emailAddress: string;
  employer: string;
  firstName: string;
  function: string;
  id: number;
  label: string;
  lastName: string;
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
