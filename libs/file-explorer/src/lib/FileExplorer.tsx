import React from 'react';
import TreeView from '@mui/lab/TreeView';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FileIcon from '@mui/icons-material/FileCopyOutlined';
import Node from './components/Node'
import { FileExplorerProps } from './types'

export function FileExplorer(props: FileExplorerProps) {
  if (!props.node) {
    return null;
  }

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
      defaultEndIcon={<FileIcon />}
      defaultExpanded={props.defaultExpanded}
    >
      <Node key={props.node.path} node={props.node} onSelectNode={props.onSelectNode} />
    </TreeView>
  );
}

FileExplorer.defaultProps = {
  defaultExpanded: []
}

export default FileExplorer;
