import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { FormikHelpers } from 'formik';
import { defaultSearchFormValues, FileExplorer, SearchForm, SearchFormValues } from '@directory-inspector/file-explorer'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PageContainer from '../components/PageContainer/PageContainer';
import PageTitle from '../components/PageTitle/PageTitle';
import SubtitleText from '../components/Texts/SubtitleText';
import queryFiles from './queryFiles.graphql'
import { SelectNodeCB } from 'libs/file-explorer/src/lib/types';

const Landing = () => {
  const [searchFormValues, setSearchFormValues] = useState<SearchFormValues>(defaultSearchFormValues);
  const { data, loading, error, refetch } = useQuery(queryFiles, {
    variables: defaultSearchFormValues as SearchFormValues
  });

  useEffect(() => {
    refetch(searchFormValues)
  }, [searchFormValues])

  const onSubmit = async (values: SearchFormValues, { setSubmitting }: FormikHelpers<SearchFormValues>) => {
    setSearchFormValues(values);
  };

  const onSelectNode: SelectNodeCB = (node) => {
    if (node.isDirectory) {
      setSearchFormValues({
        ...searchFormValues,
        path: node.path,
      });
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
              nodes={data?.files?.entries || []}
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
