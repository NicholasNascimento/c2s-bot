import { createContext, ReactNode, useState } from "react";

interface DataContextProps {
  allMessages: {
    message: string
    id: string
  }[]
  setAllMessages: (messages: {}[]) => void
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const [allMessages, setAllMessages] = useState([])

  return (
    <DataContext.Provider value={{ allMessages, setAllMessages }}>
      {children}
    </DataContext.Provider>
  )
}