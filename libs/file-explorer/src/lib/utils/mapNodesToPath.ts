import { FileNode } from "../types";
import { mergeNodes } from "./mergeNodes";

export const mapNodesToPath = (
  node: FileNode,
  parsedPath: string[],
  newNodes: FileNode[],
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
        return mapNodesToPath(childNode, restPath, newNodes, totalCount);
      }

      if (childNode.fileName === currentDir) {
        return mergeNodes(childNode, newNodes, totalCount);
      }

      return childNode;
    }),
  };
};

export default mapNodesToPath;
