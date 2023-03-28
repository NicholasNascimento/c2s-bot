import styled from 'styled-components'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const AddButtonEdge = styled.div`
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
`

export const AddButton = styled.button`
  width: fit-content;
  display: flex;

  background: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-size: 12px;
  line-height: 1;
`

export const Plus = styled(AiOutlinePlusCircle)`
  font-size: 10px;
  color: var(--gray-75);
`