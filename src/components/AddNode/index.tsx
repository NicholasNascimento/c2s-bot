import { Handle, Position } from 'reactflow'

import * as S from './styles'

export function AddNode() {
  return (
    <S.AddNode>
      <Handle type="target" position={Position.Top} id="a" isConnectable />
      <S.AddButton>
        <S.Plus />
      </S.AddButton>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable />
    </S.AddNode>
  )
}