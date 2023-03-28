import { createContext, ReactNode, useState } from "react";

interface DataContextProps {
  allMessages: {
    message: string
    id: string
  }[]
  setAllMessages: (messages: {}[]) => void
  includeNode: string
  setIncludeNode: (includeNode: string) => void
  positionX: number
  setPositionX: (positionX: number) => void
  positionY: number
  setPositionY: (positionY: number) => void
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: DataProviderProps) {
  const [allMessages, setAllMessages] = useState([])
  const [includeNode, setIncludeNode] = useState("")
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  return (
    <DataContext.Provider value={{ allMessages, setAllMessages, includeNode, setIncludeNode, positionX, setPositionX, positionY, setPositionY }}>
      {children}
    </DataContext.Provider>
  )
}