
export interface FileNode {
  path: string;
  size: number;
  nodes?: FileNode[];
}

export interface NodeLabelProps {
  node: FileNode;
  parent?: FileNode
}
