"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { DEFAULT_TOKENS } from "@/lib/transformer/constants";

type TransformerWalkthroughContextValue = {
  tokens: string[];
  variant: "big" | "small";
  setVariant: (variant: "big" | "small") => void;
};

const TransformerWalkthroughContext =
  createContext<TransformerWalkthroughContextValue | null>(null);

export function useTransformerWalkthrough() {
  const ctx = useContext(TransformerWalkthroughContext);
  if (!ctx) {
    throw new Error(
      "useTransformerWalkthrough must be used within TransformerWalkthroughProvider"
    );
  }
  return ctx;
}

export function TransformerWalkthroughProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [variant, setVariant] = useState<"big" | "small">("big");
  const tokens = [...DEFAULT_TOKENS];

  const value = useMemo(
    () => ({ tokens, variant, setVariant }),
    [variant]
  );

  return (
    <TransformerWalkthroughContext.Provider value={value}>
      {children}
    </TransformerWalkthroughContext.Provider>
  );
}
