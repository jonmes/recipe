import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:8080/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "myadminsecretkey",
  },
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
