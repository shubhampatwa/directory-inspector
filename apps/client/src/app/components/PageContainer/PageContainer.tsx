import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const PageContainer: React.FunctionComponent<{
  children: React.ReactChild | React.ReactChild[],
}> = ({ children, ...props }) => (
  <Box pt={4} maxWidth="md" component={Container} {...props}>
    {children}
  </Box>
);

export default PageContainer;
