import React from 'react';
import TreeItem from '@mui/lab/TreeItem';
import NodeLabel from './NodeLabel';
import { FileNode, NodeLabelProps, NodeProps } from '../types'

const Node = ({ node, parent, onSelectNode }: NodeProps) => (
  <TreeItem
    key={`${parent?.path}_${node.path}`}
    nodeId={node.path}
    label={<NodeLabel node={node} parent={parent} />}
    onClick={() => onSelectNode(node, parent)}
  >
    {(node.nodes || []).map((childNode: FileNode) => (
      <Node
        key={`${node?.path}_${childNode.path}`}
        node={childNode}
        parent={node}
        onSelectNode={onSelectNode}
      />
    ))}
  </TreeItem>
);

export default Node;
