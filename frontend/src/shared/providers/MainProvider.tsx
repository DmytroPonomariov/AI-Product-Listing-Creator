"use client";

import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { AppProvider } from "@/context/AppContext";

export function MainProvider({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AppProvider>{children}</AppProvider>
    </TanstackQueryProvider>
  );
}