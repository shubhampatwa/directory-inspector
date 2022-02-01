import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { initializeSchema } from './schema';
import { Server } from 'http';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';


export const initApolloGraphqlServer = async (app: Express, httpServer: Server): Promise<void> => {
  const schema = await initializeSchema();

  const apolloServer = new ApolloServer({
    schema,

    introspection: process.env.NODE_ENV !== 'production',

    // https://www.apollographql.com/docs/apollo-server/migration/#reenabling-graphql-playground
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          'request.credentials': 'include',
        },
      }),
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false // we can handle cors on main express app in src/app/main.ts
  });

  ['SIGINT', 'SIGTERM'].forEach((signal) => {
    process.on(signal, () => {
      httpServer.close();
      process.exit();
    });
  });
};
