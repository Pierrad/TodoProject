import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';

export const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const getClient = (url: string) => {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    name: 'Apollo Client',
    queryDeduplication: false,
    defaultOptions,
  });
}

export const defaultConfig = {
  fetchPolicy: 'no-cache',
  errorPolicy: 'all',
}
