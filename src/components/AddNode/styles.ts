import styled from 'styled-components'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const AddNode = styled.div`
  width: 200px;

  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const AddButton = styled.button`
  display: flex;
  margin: 0 auto;

  background-color: transparent;
  border: none;
`

export const Plus = styled(AiOutlinePlusCircle)`
  font-size: 20px;
  color: var(--cyan-50);
`