import { useState, useContext, useEffect } from 'react'
import { Handle, Position } from 'reactflow'

import { DataContext } from '../../context/DataContext'

import * as S from './styles'

type NodeProps = {
  id: string
}

export function TextInputNode({id}: NodeProps) {
  const [message, setMessage] = useState<string>("")
  const { allMessages, setAllMessages } = useContext(DataContext)

  const newMessage = {
    message, id
  }

  function handleAddMessage() {
    if(allMessages.filter((item) => item.id === id).length === 0){
      setAllMessages([...allMessages, newMessage])
    } else {
      setAllMessages([...allMessages.filter(item => item.id !== id), newMessage])
    }
  }

  return (
    <S.TextNode>
      <Handle type="target" position={Position.Top} id="a" isConnectable />
      <S.Label htmlFor='message'>Enviar menssagem de texto</S.Label>
      <S.TextInput
        type="text"
        id='message'
        name='message'
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <S.CheckButton onClick={() => handleAddMessage()}><S.Check /></S.CheckButton>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable />
    </S.TextNode>
  )
}