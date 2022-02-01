import * as React from 'react';
import { Formik, FormikErrors } from 'formik';
import { isNonNegativeNumber, isNonPositiveNumber } from '@directory-inspector/validations';
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
      validate={async (values) => {
        const errors: FormikErrors<SearchFormValues> = {};
        if (!values.path.length) {
          errors.path = 'Path must be a valid string';
        }

        if (isNonNegativeNumber(values.offset)) {
          errors.offset = 'Offset must be a valid number';
        }

        if (isNonPositiveNumber(values.limit)) {
          errors.limit = 'Limit must be a valid positive integer';
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
