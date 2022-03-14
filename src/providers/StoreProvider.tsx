import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { TeamMemberProps } from "../types/TeamMember.types";
import { TimeEntryProps } from "../types/TimeEntry.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: TimeEntryProps[],
    setTimeEntries: Dispatch<SetStateAction<TimeEntryProps[]>>,
  ];
  teamMembers: [
    teamMembers: TeamMemberProps[],
    setTeamMembers: Dispatch<SetStateAction<TeamMemberProps[]>>,
  ];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    teamMembers: useState<TeamMemberProps[]>([]),
    timeEntries: useState<TimeEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
