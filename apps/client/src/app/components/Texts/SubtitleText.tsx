import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

const SubtitleText: React.FunctionComponent<TypographyProps> = (props) => (
  <Typography variant="body1" {...props} />
);

export default SubtitleText;
