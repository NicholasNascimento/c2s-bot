import { createContext, ReactNode, useState } from "react";

interface DataContextProps {
  allMessages: {
    message: string
    id: string
  }[]
  setAllMessages: (messages: {}[]) => void
  includeNode: string
  setIncludeNode: (includeNode: string) => void
  edgeInfo: {}[]
  setEdgeInfo: (edgeInfo: {}[]) => void
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const [allMessages, setAllMessages] = useState([])
  const [includeNode, setIncludeNode] = useState("")
  const [edgeInfo, setEdgeInfo] = useState([])

  return (
    <DataContext.Provider value={{ allMessages, setAllMessages, includeNode, setIncludeNode, edgeInfo, setEdgeInfo }}>
      {children}
    </DataContext.Provider>
  )
}