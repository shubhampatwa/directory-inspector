import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { FormikHelpers } from 'formik';
import { defaultSearchFormValues, FileExplorer, FileNode, mapNodesToPath, SearchForm, SearchFormValues, SelectNodeCB } from '@directory-inspector/file-explorer'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PageContainer from '../components/PageContainer/PageContainer';
import PageTitle from '../components/PageTitle/PageTitle';
import SubtitleText from '../components/Texts/SubtitleText';
import queryFiles from './queryFiles.graphql'
import { sep } from 'path-browserify';

const prepareNodesToDisplay = (nodes: FileNode[]): FileNode[] => (
  nodes.map((node: FileNode) => {
    const updatedNode = { ...node }
    if (node.isDirectory && !node.nodes?.length) {
      updatedNode.nodes = [{
        path: '<empty>',
        fileName: 'PLACEHOLDER',
        size: 0,
        isDirectory: false,
        parsedPath: [],
      }];
    }

    return updatedNode;
  })
);

const Landing = () => {
  const [node, setNode] = useState<FileNode | undefined>(undefined);
  const [basePath, setBasePath] = useState<string>('');
  const [searchFormValues, setSearchFormValues] = useState<SearchFormValues>(defaultSearchFormValues);
  const {refetch } = useQuery(queryFiles, {
    variables: defaultSearchFormValues,
    onCompleted: (data: any) => {
      if (data?.files?.entries.length) {
        updateNode(data?.files?.entries);
      }
    }
  })

  const refetchFiles = (variables: SearchFormValues) => {
    refetch(variables).then((data: any) => {
      if (data?.files?.entries.length) {
        updateNode(data?.files?.entries);
      }
    });
  }

  const updateNode = (nodes: FileNode[]) => {
    const newNodes = prepareNodesToDisplay(nodes);
    const currentPath = searchFormValues.path;

    if (node) {
      const updatedState = mapNodesToPath(node, basePath, newNodes, currentPath)
      setNode(updatedState);
    } else {
      const newState = {
        path: currentPath,
        fileName: currentPath,
        size: 0,
        isDirectory: true,
        nodes: newNodes,
        parsedPath: currentPath.split(sep).slice(1),
      };

      setNode(newState);
      setBasePath(currentPath);
    }
  }

  const onSubmit = async (values: SearchFormValues, { setSubmitting }: FormikHelpers<SearchFormValues>) => {
    setSearchFormValues(values);
    setNode(undefined);
    refetchFiles(values)
  };

  const onSelectNode: SelectNodeCB = (node) => {
    if (node.isDirectory) {
      setSearchFormValues({
        ...searchFormValues,
        path: node.path,
      });
      refetchFiles({
        ...searchFormValues,
        path: node.path,
      })
    }
  };

  return (
    <PageContainer>
      <Paper>
        <Box p={2}>
          <PageTitle>Directory explorer</PageTitle>
          <SubtitleText>This SPA allows you to navigate through the directory files.</SubtitleText>
        </Box>
        <Divider />

        <Box p={2}>
          <SearchForm initialValues={searchFormValues} onSubmit={onSubmit} />
          <Box pt={2} pr={1}>
            <FileExplorer
              node={node}
              currentPath={searchFormValues.path}
              onSelectNode={onSelectNode}
            />
          </Box>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default Landing;
