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
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
  });
  return response.json();
};
