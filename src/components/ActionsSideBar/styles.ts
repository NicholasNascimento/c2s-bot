import styled from 'styled-components'

export const ActionsSideBar = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
`

export const Aside = styled.aside`
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
`

export const DndArea = styled.div`
  height: 64vh;
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
`

export const DndNode = styled.div`
  height: 35px;
  display: flex;
  margin: 0 10px 10px 0;
  padding-left: 17px;
  gap: 17px;
  align-items: center;

  color: var(--cyan-50);
  font-weight: bold;
  background-color: #ffffff;
  border: 1px solid var(--gray-25);
  border-radius: 4px;
  cursor: grab;
`