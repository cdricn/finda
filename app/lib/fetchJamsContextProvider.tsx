import { createContext } from "react"

interface FetchJamsContextType {
  fetchJamsPromise: Promise<any[]>;
}

const FetchJamsContext = createContext<FetchJamsContextType | null>(null);
const ThemeContext = createContext('light');

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