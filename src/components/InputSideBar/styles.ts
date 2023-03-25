import styled from 'styled-components'

export const InputSideBar = styled.div`
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
  height: 55vh;
  width: 400px;
  display: grid;
  margin: 0 auto;
  grid-template-areas: 'A B';
  gap: 20px 0;

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

export const DndNodeBox = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
`

export const DndNode = styled.div`
  height: 90px;
  width: 108px;
  margin: 0 auto;
  text-align: center;
   
  color: var(--cyan-50);
  font-weight: bold;
  background-color: #ffffff;
  border: 1px solid var(--cyan-50);
  border-radius: 4px;
  cursor: grab;

  img {
    width: 42px;
    height: 42px;
    margin-top: 8px;
  }

  p {
    width: 90%;
    margin: 0 auto;
  }
`