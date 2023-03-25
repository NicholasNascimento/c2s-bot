import * as S from './styles'

interface NodeDataProps {
  actionsNodeData: {
    title: string,
    type: string,
    src: string,
    alt: string
  }[]
}

export function ActionsSideBar({ actionsNodeData }: NodeDataProps) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <S.ActionsSideBar>
      <S.Aside>
        <S.DndArea>
          {actionsNodeData.map((dndOption) => {
            return(
              <S.DndNode key={dndOption.title} className="dndnode input" onDragStart={(event) => onDragStart(event, dndOption.type)} draggable>
                <img src={dndOption.src} alt={dndOption.alt} />
                <p>{dndOption.title}</p>
              </S.DndNode>
            )
          })}
        </S.DndArea>
      </S.Aside>
    </S.ActionsSideBar>
  );
};