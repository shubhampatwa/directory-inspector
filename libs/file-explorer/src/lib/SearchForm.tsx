import * as React from 'react';
import { Formik } from 'formik';
import SearchFormLayout from './components/SearchFormLayout';

export interface SearchFormValues {
  path: string;
  offset?: number;
  limit?: number;
}

export const defaultSearchFormValues = {
  path: '/',
  offset: 0,
  limit: 10,
}

export interface SearchFormProps {
  initialValues: SearchFormValues
}

export const SearchForm: React.FunctionComponent<SearchFormProps> = (props) => {
  return (
    <Formik
      enableReinitialize
      initialValues={props.initialValues}
      validate={(values) => {
        const errors: Partial<SearchFormValues> = {};
        if (!values.path.length) {
          errors.path = 'Path is required';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting, setValues }) => (
        <SearchFormLayout
          isSubmitting={isSubmitting}
          onSubmit={submitForm}
          onReset={() => setValues(defaultSearchFormValues)}
        />
      )}
    </Formik>
  );
};

SearchForm.defaultProps = {
  initialValues: defaultSearchFormValues,
};

export default SearchForm;
