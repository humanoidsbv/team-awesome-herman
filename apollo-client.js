import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://localhost:3333",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

export default client;
