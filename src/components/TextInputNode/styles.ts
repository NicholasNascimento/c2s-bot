import styled from 'styled-components'
import { VscCheck } from 'react-icons/vsc'

export const TextNode = styled.div`
  padding: 8px;

  background-color: #ffffff;
  border: 1px solid var(--cyan-50);
  border-radius: 5px;
`

export const Label = styled.label`
  display: block;

  font-size: 14px;
  color: var(--gray-75);
`

export const TextInput = styled.input`
  margin-top: 5px;
  color: var(--gray-75);

  &:focus {
    color: var(--cyan-50);
    border: none;
    outline: 2px solid var(--cyan-50);
  }
`

export const CheckButton = styled.button`
  padding: 1px 2px;
  margin-left: 5px;

  background-color: var(--cyan-50);
  border: none;
  border-radius: 2px;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
`

export const Check = styled(VscCheck)`
  color: #ffffff;
  font-size: 14px;
`