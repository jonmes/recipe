import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { createApolloProvider } from "@vue/apollo-option";


const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:8080/v1/graphql",
  headers: {
    // ...headers,
    authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdydGFPZDFJRHdjcHpHRDBqdi1UVSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYxY2MwYjc0ZTA5YzgzMDA2ZjFhNzg0ZSJ9LCJpc3MiOiJodHRwczovL2Rldi1wbDRudmoxbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjFjYzBiNzRlMDljODMwMDZmMWE3ODRlIiwiYXVkIjpbInJlY2lwZS1oYXN1cmEiLCJodHRwczovL2Rldi1wbDRudmoxbi51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjQxNDE0MDYyLCJleHAiOjE2NDE1MDA0NjIsImF6cCI6Ik54eXNhWE9ONGw1YWlEWEcxSm9TV2RQMlBIYTFZU2tHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbInJlYWQ6cmVjaXBlIl19.ufXZxoZCD9A_8QLTqSU5lThjtaBADB7v7YfCVDKdoICHBBzWOoOWC89yuKsqWP59EHrCk2ZjiyDFCO0WqRgkKTkdgKdIhtDXpyANNqq-mpQswKwbs4TkhtFdJ7ut9SI3ULBxyHbb0S6SD1SzdooGZYEObru6Z_El2oXBtfMRTE36QtDIvNT6sl9WK-Mu4M_2D_6ivhnupAtmc2nzXJExxLlxrN7qsB4z4xLS7d_czodkOD_IiQt_NIf-veWb7PhXRNCwEuiIr3AR3SYoKscTmQfXG1-X1-OBTOe8i3d-7hkuzyAdz3Y9VbgcTK8n5tiepHZqbDgUx8mxETCqGbO6zg`,
    // "x-hasura-admin-secret": "myadminsecretkey",
  },
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
