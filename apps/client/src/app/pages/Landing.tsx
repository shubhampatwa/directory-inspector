import { useState } from 'react';
import { useQuery } from '@apollo/client'
import { FormikHelpers } from 'formik';
import { defaultSearchFormValues, FileExplorer, FileNode, mapNodesToPath, mergeNodes, SearchForm, SearchFormValues, SelectNodeCB } from '@directory-inspector/file-explorer'
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
  const [filesCount, setFilesCount] = useState<Record<string, number>>({});
  const [rootPath, setRootPath] = useState<string>('');
  const [searchFormValues, setSearchFormValues] = useState<SearchFormValues>(defaultSearchFormValues);
  const {refetch } = useQuery(queryFiles, {
    variables: defaultSearchFormValues,
    onCompleted: (data: any) => {
      if (data?.files?.entries.length) {
        updateNode(data?.files?.entries, data?.files?.totalCount);
      }
    }
  });

  const refetchFiles = (variables: SearchFormValues) => {
    refetch(variables).then((data: any) => {
      if (data?.files?.entries.length) {
        updateNode(data?.files?.entries, data?.files?.totalCount);
      }
    });
  }

  const updateNode = (nodes: FileNode[], totalCount = 0) => {
    const newNodes = prepareNodesToDisplay(nodes);
    const currentPath = searchFormValues.path;

    if (node) {
      const parsedPath = currentPath.replace(rootPath, '').split(sep).filter(Boolean);
      const updatedState = mapNodesToPath(node, parsedPath, newNodes, totalCount)
      setNode(updatedState);
    } else {
      const newNode = {
        path: currentPath,
        fileName: currentPath,
        size: 0,
        isDirectory: true,
        nodes: newNodes,
        parsedPath: currentPath.split(sep).slice(1),
      };

      setNode(mergeNodes(newNode, [], totalCount));
      setRootPath(currentPath);
    }

    if (!filesCount[currentPath]) {
      setFilesCount({
        ...filesCount,
        [currentPath]: totalCount,
      });
    }
  }

  const onSubmit = async (values: SearchFormValues, { setSubmitting }: FormikHelpers<SearchFormValues>) => {
    if (values.path !== searchFormValues.path) {
      setNode(undefined);
    }
    setSearchFormValues(values);
    refetchFiles(values)
  };

  const onSelectNode: SelectNodeCB = (node, parent) => {
    if (node.fileName === 'LOAD_MORE_FILES') {
      setSearchFormValues({
        ...searchFormValues,
        offset: parent?.nodes?.length ? parent?.nodes?.length - 1 : 0,
        path: parent?.path as string
      });
      refetchFiles({
        ...searchFormValues,
        offset: parent?.nodes?.length ? parent?.nodes?.length - 1 : 0,
        path: parent?.path as string
      })
    }

    if (node.isDirectory) {
      setSearchFormValues({
        ...searchFormValues,
        offset: 0,
        path: node.path,
      });
      refetchFiles({
        ...searchFormValues,
        offset: 0,
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
