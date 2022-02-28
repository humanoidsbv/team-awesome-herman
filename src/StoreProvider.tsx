import React, { createContext, useState } from "react";

import * as Types from "../types/types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntry[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntry[]>>,
  ];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreProvider({ children }) {
  const store = {
    timeEntries: useState([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
