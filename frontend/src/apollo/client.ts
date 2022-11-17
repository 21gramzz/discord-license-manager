import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { GraphQLError } from 'graphql';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { apiErrorsVar } from './global-vars';
import storage from '../utils/storage';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const errors: GraphQLError[] = [];

  if (graphQLErrors) {
    graphQLErrors.forEach((err) => {
      errors.push(err);
    });
  }
  if (errors.length) {
    apiErrorsVar(errors);
  }
});

const authLink = setContext((_, { headers }) => {
  const token = storage.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

export default client;
