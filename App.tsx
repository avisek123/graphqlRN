import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from '@apollo/client';

import Router from './Router';
const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
