/**
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { initApolloGraphqlServer } from './app/graphql';
import { environment } from './environments/environment';

const app = express();

(async () => {
  console.info(`${'='.repeat(30)}`);
  console.info(`NODE_ENV: ${environment.appEnv}`);
  console.info(`${'='.repeat(30)}`);

  const httpServer = app.listen(environment.port, () => {
    console.info(`Server is now up @ ${environment.port}`);
  });

  await initApolloGraphqlServer(app, httpServer);
})();
