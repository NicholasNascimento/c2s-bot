import React, { useContext, useEffect } from 'react';
import { getBezierPath, Position } from 'reactflow';
import { DataContext } from '../../context/DataContext';

import * as S from './styles'

const foreignObjectSize = 40;

export function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const { setRemoveEdge } = useContext(DataContext)

  const onEdgeClick = (_, id) => {
    setRemoveEdge(id)
  };

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <S.AddButtonEdge>
          <S.AddButton className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
            <S.Plus />
          </S.AddButton>
        </S.AddButtonEdge>
      </foreignObject>
    </>
  );
}