import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

const PageTitle: React.FunctionComponent<TypographyProps> = (props) => (
  <Typography variant="h4" fontWeight="bold"  {...props} />
);

export default PageTitle;
