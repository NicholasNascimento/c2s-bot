import { createContext, ReactNode, useState } from "react";

interface DataContextProps {
  allMessages: {
    message: string
    id: string
  }[]
  setAllMessages: (messages: {}[]) => void
  removeEdge: string
  setRemoveEdge: (removeEdge: string) => void
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const [allMessages, setAllMessages] = useState([])
  const [removeEdge, setRemoveEdge] = useState("")

  return (
    <DataContext.Provider value={{ allMessages, setAllMessages, removeEdge, setRemoveEdge }}>
      {children}
    </DataContext.Provider>
  )
}