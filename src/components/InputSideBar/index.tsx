import * as S from './styles'

interface NodeDataProps {
  inputNodeData: {
    title: string,
    type: string,
    src: string,
    alt: string
  }[]
}

export function InputSideBar({ inputNodeData }: NodeDataProps) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <S.InputSideBar>
      <S.Aside>
        <S.DndArea>
          {inputNodeData.map(options => {
            return (
              <S.DndNodeBox key={options.title}>
                <S.DndNode className="dndnode input" onDragStart={(event) => onDragStart(event, options.type)} draggable>
                  <img src={options.src} alt={options.alt} />
                  <p>{options.title}</p>
                </S.DndNode>
              </S.DndNodeBox>
            )
          })}
        </S.DndArea>
      </S.Aside>
    </S.InputSideBar>
  );
};