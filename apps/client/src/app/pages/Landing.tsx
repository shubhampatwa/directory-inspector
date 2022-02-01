import React, { useState } from 'react';
import { FileExplorer } from '@directory-inspector/file-explorer'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PageContainer from '../components/PageContainer/PageContainer';
import PageTitle from '../components/PageTitle/PageTitle';
import SubtitleText from '../components/Texts/SubtitleText';

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <PageContainer>
      <Paper>
        <Box p={2}>
          <PageTitle>Directory explorer</PageTitle>
          <SubtitleText>This SPA allows you to navigate through the directory files.</SubtitleText>
        </Box>
        <Divider />

        <Box p={2}>
          <FileExplorer />
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default Landing;
