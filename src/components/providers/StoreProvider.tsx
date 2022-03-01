import React, { createContext, useState } from "react";

import * as Types from "../../types/TimeEntry.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntryProps[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntryProps[]>>,
  ];
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    timeEntries: useState<Types.TimeEntryProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
