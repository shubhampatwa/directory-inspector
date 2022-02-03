import { FileNode } from "../types";

const mapNode = (
  node: FileNode,
  newNodes: FileNode[],
  parsedPath: string[]
): FileNode => {
  const [path] = parsedPath.slice(0, 1);
  const restPath = parsedPath.slice(1);

  return {
    ...node,
    nodes: (node.nodes || []).map(childNode => {
      if (childNode.fileName === path || childNode.path === path) {
        return {
          ...childNode,
          nodes: newNodes
        };
      }

      return mapNode(childNode, newNodes, restPath);
    }),
  }
};

export const mapNodesToPath = (
  nodes: FileNode[],
  newNodes: FileNode[],
  parsedPath: string[]
): FileNode[] => {
  const [path] = parsedPath;

  return nodes.map((node: FileNode) => {
    if (node.fileName === path) {
      return mapNode(node, newNodes, parsedPath)
    }
    return node
  });
};

export default mapNodesToPath;
