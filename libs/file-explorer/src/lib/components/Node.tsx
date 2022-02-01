import React from 'react';
import TreeItem from '@mui/lab/TreeItem';
import NodeLabel from './NodeLabel';
import { FileNode, NodeLabelProps } from '../types'

const Node = ({node, parent}: NodeLabelProps) => (
  <TreeItem key={node.path} nodeId={node.path} label={<NodeLabel node={node} parent={parent} />}>
    {(node.nodes || []).map((childNode: FileNode) => <Node node={childNode} parent={node} />)}
  </TreeItem>
);

export default Node;
