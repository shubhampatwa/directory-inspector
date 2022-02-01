import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import resolvers from './resolvers';
import typeDefs from './typeDefs';


export const initializeSchema = async (): Promise<GraphQLSchema> => {
  const graphqlSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs(typeDefs),
    resolvers: mergeResolvers(resolvers),
  });

  return graphqlSchema;
};
