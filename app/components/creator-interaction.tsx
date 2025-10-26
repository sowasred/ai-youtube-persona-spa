"use client"

import { useState, createContext, useContext } from "react";

// Create a context for sharing state between components
const CreatorContext = createContext<{
  selectedCreatorId: number;
  setSelectedCreatorId: (id: number) => void;
} | null>(null);

export function CreatorProvider({ children }: { children: React.ReactNode }) {
  const [selectedCreatorId, setSelectedCreatorId] = useState(1); // Default to Andrew Huberman
  
  return (
    <CreatorContext.Provider value={{ selectedCreatorId, setSelectedCreatorId }}>
      {children}
    </CreatorContext.Provider>
  );
}

export function useCreator() {
  const context = useContext(CreatorContext);
  if (!context) {
    throw new Error('useCreator must be used within a CreatorProvider');
  }
  return context;
}
