import uniqBy from "lodash/uniqBy";
import { sep } from "path-browserify";
import { FileNode } from "../types";

const mergeNodes = (currentNode: FileNode, newNodes: FileNode[]): FileNode => {
  return {
    ...currentNode,
    nodes: uniqBy([
      ...(currentNode.nodes || []).filter(({ fileName }) => fileName !== 'PLACEHOLDER'),
      ...newNodes
    ], 'path'),
  };
};

const mapNode = (
  node: FileNode,
  newNodes: FileNode[],
  parsedPath: string[]
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
        return mapNode(childNode, newNodes, restPath);
      }

      if (childNode.fileName === currentDir) {
        return mergeNodes(childNode, newNodes)
      }

      return childNode;
    }),
  };
};

export const mapNodesToPath = (
  node: FileNode,
  root: string,
  newNodes: FileNode[],
  currentPath: string
): FileNode => {
  const parsedPath = currentPath.replace(root, '').split(sep).slice(1)
  return mapNode(node, newNodes, parsedPath);
};

export default mapNodesToPath;
