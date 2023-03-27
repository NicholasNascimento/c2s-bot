import {
  Node,
  Edge,
  NodeTypes,
  EdgeTypes} from 'reactflow'

import { InitialNode } from '../components/InitialNode';
import { TextInputNode } from '../components/TextInputNode';
import { AddNode } from '../components/AddNode';
import { ButtonEdge } from '../components/AddButtonEdge';

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
  }
]

const initialEdges: Edge[] = []

const nodeTypes: NodeTypes = {
  startingNode: InitialNode,
  textInputNode: TextInputNode,
  addNode: AddNode
}

const edgeTypes: EdgeTypes = {
  addbuttonedge: ButtonEdge,
};

let id = 1;
const getId = () => `dndnode_${id++}`;

let addId = 0;
const getAddId = () => `addnode_${id++}`;

export { initialNodes, initialEdges, nodeTypes, getId, getAddId, nodeColor, edgeTypes }