import React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FileIcon from '@mui/icons-material/FileCopyOutlined';

import './file-explorer.module.css';

/* eslint-disable-next-line */
interface FileNode {
  path: string;
  size: number;
  nodes?: FileNode[];
}

export interface FileExplorerProps {
  defaultExpanded?: string[];
  nodes?: FileNode[];
}

const defaultProps: FileExplorerProps = {
  defaultExpanded: ['root'],
  nodes: [
    {
      "path": "root",
      "size": 0,
      "nodes": [
        {
            "path": "root/file1",
            "size": 24
        },
        {
            "path": "root/file2",
            "size": 24
        },
        {
            "path": "root/folder1",
            "size": 24,
            "nodes": [
              {
                  "path": "root/folder1/file1",
                  "size": 24
              },
              {
                  "path": "root/folder1/file2",
                  "size": 24
              },
              {
                  "path": "root/folder1/folder1",
                  "size": 24
              },
              {
                  "path": "root/folder1/file4",
                  "size": 24
              }
            ]
        },
        {
            "path": "root/file4",
            "size": 24
        }
      ]
    }
  ]
}

const renderNode = (node: FileNode) => (
  <TreeItem key={node.path} nodeId={node.path} label={node.path}>
    {(node.nodes || []).map(renderNode)}
  </TreeItem>
);

export function FileExplorer(props: FileExplorerProps = defaultProps) {
  console.log(props)
  return (
    <div>
      <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
      defaultEndIcon={<FileIcon />}
      defaultExpanded={props.defaultExpanded}
    >
      {(props.nodes || []).map(renderNode)}
    </TreeView>
    </div>
  );
}

FileExplorer.defaultProps = defaultProps

export default FileExplorer;
