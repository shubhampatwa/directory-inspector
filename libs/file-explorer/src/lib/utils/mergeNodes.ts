import uniqBy from "lodash/uniqBy";
import { MORE_FILES_NODE, MORE_FILES_NODE_NAME, PLACEHOLDER_NODE_NAME } from "../constants";
import { FileNode } from "../types";

const filterSystemNodes = (nodes: FileNode[]): FileNode[] => 
  nodes.filter(({ fileName }) => (
    ![MORE_FILES_NODE_NAME, PLACEHOLDER_NODE_NAME].includes(fileName))
  );

const hasMoreFiles = (nodes: FileNode[], totalCount: number) =>
    nodes.length < totalCount;

const appendMoreFilesNode = (node: FileNode) => ({
  ...node,
  nodes: [
    ...(node.nodes as FileNode[]),
    MORE_FILES_NODE,
  ],
});

export const mergeNodes = (currentNode: FileNode, newNodes: FileNode[], totalCount: number): FileNode => {
  const updatedNode = {
    ...currentNode,
    nodes: uniqBy([
      ...filterSystemNodes(currentNode.nodes || []),
      ...newNodes
    ], 'path'),
  };

  if (hasMoreFiles(updatedNode.nodes, totalCount)) {
    return appendMoreFilesNode(updatedNode)
  }

  return updatedNode;
};
