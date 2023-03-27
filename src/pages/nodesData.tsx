import {
  Node,
  Edge,
  NodeTypes} from 'reactflow'

import { InitialNode } from '../components/InitialNode';
import { TextInputNode } from '../components/TextInputNode';

const nodeColor = (node) => {
  switch (node.type) {
    case 'startingNode':
      return 'var(--cyan-50)';
    case 'textInputNode':
      return '#6865A5';
    default:
      return '#ff0072';
  }
};
  
const initialNodes: Node[] = [
  { 
    id: 'dndnode_0',
    type: 'startingNode',
    position: { x: 0, y: 0 },
    data: { value: 123 }
  }
]

const initialEdges: Edge[] = []

const nodeTypes: NodeTypes = {
  startingNode: InitialNode,
  textInputNode: TextInputNode
}

let id = 1;
const getId = () => `dndnode_${id++}`;

export { initialNodes, initialEdges, nodeTypes, getId, nodeColor }