import * as React from 'react';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import { Form, Field, FormikValues } from 'formik';
import { TextField } from 'formik-mui';

export interface SearchFormLayoutProps {
  isSubmitting: boolean;
  onReset?: () => void;
}

export const SearchFormLayout: React.FunctionComponent<SearchFormLayoutProps> = ({
  isSubmitting,
  onReset
}) => (
  <Form>
    <Grid container spacing={2} alignItems="center" justifyContent="space-around">
      <Grid item md={9} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              component={TextField}
              name="path"
              fullWidth
              label="Enter a path to explore"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Field
              fullWidth
              component={TextField}
              name="offset"
              type="number"
              label="Offset"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Field
              fullWidth
              component={TextField}
              name="limit"
              type="number"
              label="limit"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={2} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={12} sm={6} xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              size="large"
              type="submit" 
            >
              Explore
            </Button>
          </Grid>
          <Grid item md={12} sm={6} xs={12}>
            {onReset && (
              <Button
                fullWidth
                variant="contained"
                color="error"
                disabled={isSubmitting}
                size="large"
                onClick={onReset}
              >
                Reset
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={11}>
        {isSubmitting && <LinearProgress />}
      </Grid>
    </Grid>
  </Form>
);

export default SearchFormLayout;
