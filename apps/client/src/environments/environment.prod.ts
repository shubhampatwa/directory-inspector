export const environment = {
  production: true,

  // configuration for apollo client
  apolloConfig: {
    graphEndpoint: process.env['NX_GRAPH_ENDPOINT'] || 'http://localhost:3000/graphql'
  },
};
