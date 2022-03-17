import { gql } from "@apollo/client";

export const GET_TIME_ENTRIES = gql`
  query GetTimeEntries {
    allTimeEntries {
      id
      activity
      client
      stopTimestamp
      startTimestamp
    }
    allClients {
      id
      name
    }
  }
`;

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    allTeamMembers {
      firstName
      lastName
      emailAddress
      label
      client
      role
      startingDate
      id
    }
  }
`;
