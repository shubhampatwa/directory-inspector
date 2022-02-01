import { mergeTypeDefs } from '@graphql-tools/merge';
import { gql } from 'apollo-server-core';

const emptyTypeDef = gql`
  type Query {
    _empty: String
  }
`

const typeDefinitions = mergeTypeDefs([emptyTypeDef]);

export default typeDefinitions;
