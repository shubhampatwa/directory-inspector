import React, { useEffect, useState } from 'react';
import { sep } from 'path-browserify'
import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import TreeView from '@mui/lab/TreeView';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FileIcon from '@mui/icons-material/FileCopyOutlined';
import Node from './components/Node'
import { FileExplorerProps, FileNode } from './types'
import mapNodesToPath from './utils/mapNodesToPath';


const prepareNodesToDisplay = (nodes: FileNode[]): FileNode[] => (
  nodes.map((node: FileNode) => {
    const updatedNode = { ...node }
    if (node.isDirectory) {
      if (!node.nodes?.length) {

        updatedNode.nodes = [{
          path: 'loading files...',
          fileName: 'loading files...',
          size: 0,
          isDirectory: false,
          parsedPath: [],
       }]
      }
    }

    return updatedNode;
  })
);

export function FileExplorer(props: FileExplorerProps) {
  const [state, setState] = useState<FileNode[]>([])

  useEffect(() => {
    if (!props.nodes?.length) {
      return;
    }

    const parsedPath = props.currentPath.split('\\');
    console.log({parsedPath, sep})

    const newNodes = prepareNodesToDisplay(props.nodes || []);

    const found = state.find(({ path }) => {
      const [basePath] = parsedPath;
      console.log({basePath})
      console.log({path})
      return path === basePath || path === props.currentPath
    });
    if (found) {
      // const newState = state.map(item => {
        //   if (item.path !== props.currentPath) {
          //     return item;
          //   };

          //   const existingNodes = item?.nodes || [];
          //   item.nodes = uniqBy(
            //     [...existingNodes, ...newNodes],
            //     'path'
            //   ) as FileNode[];

            //   return item;
            // })

      const updatedState = mapNodesToPath(state, newNodes, props.currentPath.split(sep))
      console.log(updatedState)
      setState(updatedState);
    } else {
      console.log('adding new')
      const newState = [...state, {
        path: props.currentPath,
        fileName: props.currentPath,
        size: 0,
        isDirectory: true,
        nodes: newNodes,
        parsedPath
      }];

      setState(newState);
    }
  }, [props.nodes, props.currentPath]);

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
      defaultEndIcon={<FileIcon />}
      defaultExpanded={props.defaultExpanded}
    >
      {(state).map(node => <Node key={node.path} node={node} onSelectNode={props.onSelectNode} />)}
    </TreeView>
  );
}

FileExplorer.defaultProps = {
  defaultExpanded: ['root']
}

export default FileExplorer;
