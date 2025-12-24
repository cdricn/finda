'use client';

import { createContext, useContext } from "react"

interface FetchJamsContextType {
  fetchJamsPromise: Promise<any[]>;
}

const FetchJamsContext = createContext<FetchJamsContextType | null>(null);

export function FetchJamsContextProvider({
  children,
  fetchJamsPromise
}:{
  children: React.ReactNode;
  fetchJamsPromise: Promise<any[]>;
}) {
  return (
    <FetchJamsContext.Provider value={{fetchJamsPromise}}>
      {children}
    </FetchJamsContext.Provider>
  )
}

export function useFetchJamsContext() {
  const context = useContext(FetchJamsContext);

  if (!context) {
    throw new Error('Provider error');
  }

  return context
}


//Read this buddy
//https://lovetrivedi.medium.com/unlocking-the-full-potential-of-react-context-with-custom-hooks-f3d7e3a3d403