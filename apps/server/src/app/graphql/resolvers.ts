import { mergeResolvers } from '@graphql-tools/merge';

import fileExplorer from './fileExplorer/resolvers'

const resolvers = mergeResolvers([fileExplorer]);

export default resolvers;
