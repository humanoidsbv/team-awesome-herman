import { gql } from "@apollo/client";

export const CREATE_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $activity: String!
    $client: String!
    $startTimestamp: String!
    $stopTimestamp: String!
  ) {
    createTimeEntry(
      activity: $activity
      client: $client
      startTimestamp: $startTimestamp
      stopTimestamp: $stopTimestamp
    ) {
      id
      activity
      client
      startTimestamp
      stopTimestamp
    }
  }
`;

export const REMOVE_TIME_ENTRY = gql`
  mutation RemoveTimeEntry($id: ID!) {
    removeTimeEntry(id: $id) {
      id
    }
  }
`;

export const CREATE_TEAM_MEMBER = gql`
  mutation CreateTeamMember(
    $emailAddress: String!
    $label: String!
    $client: String!
    $role: String!
    $firstName: String!
    $lastName: String!
    $startingDate: String!
  ) {
    createTeamMember(
      emailAddress: $emailAddress
      label: $label
      client: $client
      role: $role
      firstName: $firstName
      lastName: $lastName
      startingDate: $startingDate
    ) {
      id
      emailAddress
      label
      client
      role
      firstName
      lastName
      startingDate
    }
  }
`;
