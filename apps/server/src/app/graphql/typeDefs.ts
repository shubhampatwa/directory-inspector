import { mergeTypeDefs } from '@graphql-tools/merge';
import { gql } from 'apollo-server-core';

import fileExplorer from './fileExplorer/types'

const emptyTypeDef = gql`
  type Query {
    _empty: String
  }
`

const typeDefinitions = mergeTypeDefs([emptyTypeDef, fileExplorer]);

export default typeDefinitions;
