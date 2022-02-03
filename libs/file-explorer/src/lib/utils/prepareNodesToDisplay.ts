import { PLACEHOLDER_NODE_NAME } from '../constants';
import { FileNode } from '../types';

export const prepareNodesToDisplay = (nodes: FileNode[]): FileNode[] =>
  nodes.map((node: FileNode) => {
    const updatedNode = { ...node };
    if (node.isDirectory && !node.nodes?.length) {
      updatedNode.nodes = [
        {
          path: '<empty>',
          fileName: PLACEHOLDER_NODE_NAME,
          size: 0,
          isDirectory: false,
          parsedPath: [],
        },
      ];
    }

    return updatedNode;
  });
