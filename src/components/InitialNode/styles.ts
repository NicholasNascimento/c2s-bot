import styled from 'styled-components'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export const InitialNode = styled.div`
  padding: 5px;

  background: white;
  border: 1px solid var(--cyan-50);
  border-radius: 5px;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 7px;
  align-items: center;

  border-bottom: 1px solid var(--gray-25);
`

export const NodeTitle = styled.strong`
  color: var(--cyan-50);
`

export const NodeButton = styled.button`
  width: 230px;
  height: 33px;
  padding: 0 8px;
  display: flex;
  z-index: -1;
  align-items: center;
  justify-content: space-between;

  text-align: left;
  background-color: var(--gray-15);
  color: var(--gray-75);
  border: none;
  border-radius: 3px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  p {
    display: flex;
    align-items: center;
    text-align: center;
  }
`

export const DropDown = styled.div`
  width: 230px;
  height: 35px;
  margin: 8px 22px;

  div {
    position: absolute;
  }
`

export const DropDownButton = styled.button`
  display: block;
  border: none;
  width: 230px;
  height: 33px;
  padding: 0 8px;
  z-index: 1;

  text-align: left;
  color: var(--gray-75);
  background-color: white;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  float: right;

  color: var(--gray-75);
  font-size: 15px;
`

export const Line = styled.div`
  margin: 8px 22px;

  border-bottom: 1px solid var(--gray-25);
`