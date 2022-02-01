import { ApolloClient, InMemoryCache } from "@apollo/client";

import { environment } from "../environments/environment";

const apolloClient = new ApolloClient({
  uri: environment.apolloConfig.graphEndpoint,
  cache: new InMemoryCache()
});

export default apolloClient;
