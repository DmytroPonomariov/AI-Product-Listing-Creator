"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { PlatformPreset, ListingTone } from "../shared/types";

interface AppContextType {
  platform: PlatformPreset;
  setPlatform: (p: PlatformPreset) => void;
  tone: ListingTone;
  setTone: (t: ListingTone) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [platform, setPlatform] = useState<PlatformPreset>("Shopify");
  const [tone, setTone] = useState<ListingTone>("Persuasive");

  return (
    <AppContext.Provider value={{ platform, setPlatform, tone, setTone }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
