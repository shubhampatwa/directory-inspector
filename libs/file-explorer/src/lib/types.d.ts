
export interface FileNode {
  path: string;
  fileName: string;
  parsedPath: string[];
  size: number;
  nodes?: FileNode[];
  isDirectory: boolean
}

export interface NodeLabelProps {
  node: FileNode;
  parent?: FileNode
}

export interface NodeProps extends NodeLabelProps {
  onSelectNode: SelectNodeCB
};

export interface FileExplorerProps {
  defaultExpanded?: string[];
  currentPath: string;
  nodes?: FileNode[];
  onSelectNode: SelectNodeCB
}

type SelectNodeCB = (node: FileNode, parent?: FileNode) => void
