import {
  Node,
  Edge,
  NodeTypes} from 'reactflow'

import { InitialNode } from '../components/InitialNode';
import { TextInputNode } from '../components/TextInputNode';
import { AddNode } from '../components/AddNode';

const nodeColor = (node) => {
  switch (node.type) {
    case 'startingNode':
      return 'var(--cyan-50)';
    case 'textInputNode':
      return '#6865A5';
    default:
      return 'transparent';
  }
};
  
const initialNodes: Node[] = [
  { 
    id: 'dndnode_0',
    type: 'startingNode',
    position: { x: 0, y: 0 },
    data: { value: 123 }
  },
  { 
    id: 'dndnode_1',
    type: 'addNode',
    position: { x: 43, y: 240 },
    data: { value: 123 }
  },
  { 
    id: 'dndnode_2',
    type: 'textInputNode',
    position: { x: 36, y: 350 },
    data: { value: 123 }
  }
]

const initialEdges: Edge[] = [
  {
    source: 'dndnode_0',
    sourceHandle: 'b',
    target: 'dndnode_1',
    targetHandle: 'a',
    id: `reactflow__edge-dndnode_0-dndnode_1`
  },
  {
    source: 'dndnode_1',
    sourceHandle: 'b',
    target: 'dndnode_2',
    targetHandle: 'a',
    id: `reactflow__edge-dndnode_1-dndnode_2`
  }
]

const nodeTypes: NodeTypes = {
  startingNode: InitialNode,
  textInputNode: TextInputNode,
  addNode: AddNode
}

let id = 3;
const getId = () => `dndnode_${id++}`;

export { initialNodes, initialEdges, nodeTypes, getId, nodeColor }