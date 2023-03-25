import styled, { css } from 'styled-components'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsCheck, BsFillInfoCircleFill, BsPencil } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'

interface OptionsProps {
  isActive?: boolean
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const Sidebar = styled.div`
  width: 75px;
  height: 100vh;

  border-right: 1px solid var(--gray-75);
`

export const HeaderExample = styled.div`
  width: 100%;
  height: 60px;

  border-bottom: 1px solid var(--gray-75);
`

export const Main = styled.main`
  width: 100%;
  height: 100%;

  background-color: var(--gray-15);
`

export const FlowHeader = styled.div`
  display: flex;
  margin: 25px 45px 0;
  justify-content: space-between;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const BackButton = styled.button`
  width: 100px;
  
  display: flex;
  align-items: center;

  color: var(--cyan-50);
  background-color: var(--gray-15);
  border: 1px solid var(--cyan-50);
  border-radius: 4px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ArrowLeft = styled(MdOutlineKeyboardArrowLeft)`
  margin-left: 10px;

  color: var(--cyan-50);
  font-size: 30px;
`

export const TitleChange = styled.button`
  width: fit-content;

  color: var(--gray-75);
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: none;
`

export const Pencil = styled(BsPencil)`
  margin-left: 5px;
  
  color: var(--gray-75);
  font-size: 16px;
`

export const TitleInput = styled.input`
  width: fit-content;
  
  color: var(--gray-75);
  font-size: 18px;
  background-color: transparent;
  border: 2px solid var(--gray-75);
  border-radius: 4px;
`

export const CheckButton = styled.button`
  width: 30px;
  height: 25px;
  padding-right: 2px;

  background-color: var(--cyan-50);
  border: none;
  border-radius: 5px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Check = styled(BsCheck)`
  color: #ffffff;
  font-size: 25px;
`

export const FlowOptions = styled.div`
  display: flex;
  gap: 12px;
`

export const SimulateButton = styled.button`
  width: 135px;
  height: 35px;
  display: flex;
  align-items: center;

  color: var(--gray-15);
  background-color: var(--cyan-50);
  border: none;
  border-radius: 4px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Play = styled(AiFillPlayCircle)`
  margin: 0 5px 0 20px;
  
  color: var(--gray-15);
  font-size: 16px;
`

export const SaveAndExitButton = styled.button`
  width: 135px;
  height: 35px;

  color: var(--cyan-50);
  font-weight: bold;
  background-color: var(--gray-15);
  border: none;

  p{
    font-size: 14px;
    width: fit-content;
    margin: 0 auto;
    padding: 2px 0;
  }

  &:hover {
    p {
      margin-top: 1px;
      border-bottom: 2px solid var(--cyan-50);
    }
  }
`

export const ApproveAndSaveButton = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 15px;

  color: var(--cyan-50);
  font-size: 14px;
  background-color: var(--gray-15);
  border: 2px solid var(--cyan-50);
  border-radius: 4px;

  &:hover {
    color: #ffffff;
    background-color: var(--cyan-50);
    border: 2px solid #ffffff;

    .arrow-right{
      color: #ffffff;
    }
  }
`

export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  color: var(--cyan-50);
  font-size: 25px;
`

export const Content = styled.div`
  height: 80vh;
  display: flex;
  margin: 15px 45px 0;

  border-radius: 8px;
`

export const OptionsBox = styled.div`
  width: 30%;

  border: 1px solid var(--gray-75);
  border-radius: 8px 0 0 8px;
`

export const OptionsHeader = styled.div`
  margin: 16px 25px 0;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray-75);
`

export const OptionsButton = styled.button<OptionsProps>`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;

  font-weight: bold;
  background-color: transparent;
  border: none;

  transition: color 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--cyan-50);
      border-bottom: 2px solid var(--cyan-50);
    `}

  &:hover {
    color: var(--cyan-50);
  }
`

export const OptionsSection = styled.div`
  height: 44rem;
  margin: 15px 25px 0 25px;
`

export const InputDescriptionBox = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;

  border-bottom: 1px solid var(--gray-75);
`

export const DescriptionInfoBox = styled.div`
  padding: 0 25px;

  line-height: 20px;
`

export const InputDescription = styled.p`
  font-size: 14px;
  color: var(--gray-75);
`

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  a {
    color: var(--cyan-50);
    font-size: 12px;
    cursor: pointer;
  }
`

export const Info = styled(BsFillInfoCircleFill)`
  font-size: 12px;
  color: var(--cyan-50);
`

export const ActionsDescription = styled.p`
  padding-bottom: 10px;

  font-size: 14px;
  border-bottom: 1px solid var(--gray-75);
`

export const DragAndDropBox = styled.div`
  padding: 8px;
  height: 95%;
`

export const FlowBox = styled.div`
  width: 70%;

  background-color: #ffffff;
  border: 1px solid var(--gray-75);
  border-left: none;
  border-radius: 0 8px 8px 0;

  .react-flow__controls {
    display: flex;
  }

  .react-flow__handle {
    z-index: -1;
    background-color: var(--cyan-50);
  }
`