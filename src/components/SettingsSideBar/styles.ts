import styled from 'styled-components'
import { BsFillInfoCircleFill, BsCheckLg } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { GrClose } from 'react-icons/gr'

export const SettingsSideBar = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
`

export const Description = styled.p`
  padding-bottom: 10px;

  color: var(--gray-75);
  border-bottom: 1px solid var(--gray-75);
`

export const Content = styled.div`
  padding: 14px 8px;
`

export const TopicBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: var(--gray-75);
  }
`

export const Info = styled(BsFillInfoCircleFill)`
  color: var(--gray-75);
  font-size: 12px;
`

export const PriorityDropDown = styled.button`
  width: 460px;
  height: 35px;
  text-align: left;
  padding: 0 11px;
  margin-top: 6px;

  background-color: #ffffff;
  font-size: 16px;
  color: var(--gray-75);
  border: none;
  border-radius: 4px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1850px) {
    width: 400px;
  }

  @media (max-width: 1700px) {
    width: 350px;
  }

  @media (max-width: 1530px) {
    width: 300px;
  }
`

export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  float: right;

  font-size: 20px;
  color: var(--gray-75);
`

export const PriorityDropDownOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 460px;

  background-color: #ffffff;

  @media (max-width: 1850px) {
    width: 400px;
  }

  @media (max-width: 1700px) {
    width: 350px;
  }

  @media (max-width: 1530px) {
    width: 300px;
  }
`

export const PriorityOption = styled.button`
  height: 35px;
  text-align: left;
  padding: 0 11px;

  background-color: #ffffff;
  font-size: 16px;
  color: var(--gray-75);
  border: none;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ChannelsSection = styled.div`
  margin: 24px 0;

  p {
    color: var(--gray-75);
  }
`

export const ChannelsBox = styled.div`
  height: 180px;
  overflow: auto;

  /* Firefox */
  scrollbar-width: none;
  scrollbar-color: var(--gray-75) var(--white);

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--white);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-75);
    border-radius: 5px;
    border: 3px solid var(--white);
  }

  div + div {
    margin-top: 16px;
  }
`

export const ChannelOption = styled.div`
  width: fit-content;
  height: 33px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  gap: 8px;

  color: var(--gray-75);
  background-color: #ffffff;
  border-radius: 5px;
`

export const CloseButton = styled.button`
  width: fit-content;

  background-color: transparent;
  border: none;
  border-radius: 4px;
`

export const XButton = styled(GrClose)`
  float: right;
`

export const TimeBox = styled.div`
  display: flex;
  gap: 8px;
  margin: 2px 0 25px;
`

export const TimeInput = styled.input`
  width: 80%;
  height: 35px;
  padding: 8px;

  font-size: 16px;
  color: var(--gray-75);
  border: none;
  border-radius: 4px;
`

export const TimeDropDownSection = styled.div``

export const TimeDropDownButton = styled.button`
  height: 35px;
  width: 80px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: #ffffff;
  color: var(--gray-75);
  border: none;
  border-radius: 4px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const TimeDropDownBox = styled.div`
  position: absolute;
  width: 80px;
  background-color: #ffffff;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const TimeDropDownOption = styled.button`
  height: 35px;
  padding: 8px;
  display: flex;
  align-items: center;

  background-color: #ffffff;
  color: var(--gray-75);
  border: none;
`

export const MessageTextArea = styled.textarea`
  height: 113px;
  width: 100%;
  padding: 8px;
  margin-top: 3px;

  color: var(--gray-75);
  font-size: 14px;
  border: none;
`

export const CheckBoxSection = styled.div`
  margin-top: 32px;
`

export const CheckBoxBox = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 7px;

  p {
    color: var(--gray-75);
  }
`

export const CheckBox = styled.button`
  width: 19px;
  height: 19px;

  background-color: #ffffff;
  border: none;
  border-radius: 4px;
`

export const Check = styled(BsCheckLg)`
  color: #16bac5;
`