"use client";

import { type ReactNode } from "react";
import { PageTransitionProvider } from "./PageTransition";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <PageTransitionProvider>
      {children}
    </PageTransitionProvider>
  );
}

