import uniqBy from "lodash/uniqBy";
import { FileNode } from "../types";

const mergeNodes = (currentNode: FileNode, newNodes: FileNode[], totalCount: number): FileNode => {
  const updatedNode = {
    ...currentNode,
    nodes: uniqBy([
      ...(currentNode.nodes || []).filter(({ fileName }) => !['PLACEHOLDER', 'LOAD_MORE_FILES'].includes(fileName)),
      ...newNodes
    ], 'path'),
  };

  if (updatedNode.nodes.length < totalCount) {
    updatedNode.nodes = [
      ...updatedNode.nodes,
      {
        fileName: 'LOAD_MORE_FILES',
        path: 'load more files..',
        isDirectory: false,
        size: 0,
        parsedPath: [],
      },
    ];
  }

  return updatedNode;
};

const mapNode = (
  node: FileNode,
  newNodes: FileNode[],
  parsedPath: string[],
  totalCount: number,
): FileNode => {
  const [currentDir] = parsedPath.slice(0, 1);
  const restPath = parsedPath.slice(1);

  return {
    ...node,
    nodes: (node.nodes || []).map(childNode => {
      if (!childNode.isDirectory) {
        return childNode;
      }

      if (restPath.length) {
        return mapNode(childNode, newNodes, restPath, totalCount);
      }

      if (childNode.fileName === currentDir) {
        return mergeNodes(childNode, newNodes, totalCount)
      }

      return childNode;
    }),
  };
};

export const mapNodesToPath = (
  node: FileNode,
  parsedPath: string[],
  newNodes: FileNode[],
  totalCount: number,
): FileNode => {
  return mapNode(node, newNodes, parsedPath, totalCount);
};

export default mapNodesToPath;
