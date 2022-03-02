import React, { createContext, useState } from "react";

import { TimeEntryProps } from "../../types/TimeEntry.types";
import { TeamMemberProps } from "../../types/TeamMember.types";

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
    timeEntries: useState<TimeEntryProps[]>([]),
    teamMembers: useState<TeamMemberProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
