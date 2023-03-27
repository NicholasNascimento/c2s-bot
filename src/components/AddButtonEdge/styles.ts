import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const AddButtonEdge = styled.div`
  width: fit-content;
  display: flex;
  margin: 0 auto;
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

export const Plus = styled(AiOutlineCloseCircle)`
  font-size: 10px;
  color: var(--gray-75);
`

export const AddDropDown = styled.div`
  position: absolute;
  width: 10rem;
`