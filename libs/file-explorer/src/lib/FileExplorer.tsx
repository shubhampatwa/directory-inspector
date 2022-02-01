import React from 'react';
import TreeView from '@mui/lab/TreeView';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FileIcon from '@mui/icons-material/FileCopyOutlined';
import Node from './components/Node'
import { FileNode } from './types'

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
            "size": 2114
        },
        {
            "path": "root/folder1",
            "size": 0,
            "nodes": [
              {
                  "path": "root/folder1/file1",
                  "size": 240
              },
              {
                  "path": "root/folder1/file2",
                  "size": 2400
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
      {(props.nodes || []).map(node => <Node node={node} />)}
    </TreeView>
    </div>
  );
}

FileExplorer.defaultProps = defaultProps

export default FileExplorer;
