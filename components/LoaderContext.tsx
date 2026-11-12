'use client';

import React, { createContext, useContext, useState } from 'react';

interface LoaderContextType {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType>({
  isLoaded: false,
  setIsLoaded: () => {},
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}

