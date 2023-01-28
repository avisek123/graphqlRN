import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  useQuery,
} from '@apollo/client';

import Router from './Router';
import SinglePost from './SinglePost';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';

const App = () => {
  const httpLink = new HttpLink({uri: 'https://graphqlzero.almansi.me/api'});

  const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    // const token = localStorage.getItem('auth_token');
    const token = '';

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),

    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router />
      {/* <SinglePost /> */}
      {/* <CreatePost /> */}
      {/* <UpdatePost /> */}
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
