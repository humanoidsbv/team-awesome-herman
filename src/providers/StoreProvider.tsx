import React, { createContext, useState } from "react";

import { TeamMemberProps } from "../types/TeamMember.types";
import { TimeEntryProps } from "../types/TimeEntry.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: TimeEntryProps[],
    setTimeEntries: React.Dispatch<React.SetStateAction<TimeEntryProps[]>>,
  ];
  teamMembers: [
    teamMembers: TeamMemberProps[],
    setTeamMembers: React.Dispatch<React.SetStateAction<TeamMemberProps[]>>,
  ];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    teamMembers: useState<TeamMemberProps[]>([]),
    timeEntries: useState<TimeEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
