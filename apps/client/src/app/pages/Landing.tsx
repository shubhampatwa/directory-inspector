import { useState } from 'react';
import { defaultSearchFormValues, FileExplorer, SearchForm, SearchFormValues } from '@directory-inspector/file-explorer'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PageContainer from '../components/PageContainer/PageContainer';
import PageTitle from '../components/PageTitle/PageTitle';
import SubtitleText from '../components/Texts/SubtitleText';

const Landing = () => {
  const [searchFormValues, setSearchFormValues] = useState<SearchFormValues>(defaultSearchFormValues);

  return (
    <PageContainer>
      <Paper>
        <Box p={2}>
          <PageTitle>Directory explorer</PageTitle>
          <SubtitleText>This SPA allows you to navigate through the directory files.</SubtitleText>
        </Box>
        <Divider />

        <Box p={2}>
          <SearchForm initialValues={searchFormValues} />
          <Box pt={2} pr={1}>
            <FileExplorer />
          </Box>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default Landing;
