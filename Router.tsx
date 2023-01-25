import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL} from './graphql/queries';

const Router = () => {
  const {data, loading, error} = useQuery(GET_ALL);
  console.log('data', data);
  return (
    <View>
      <Text>Router</Text>
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({});
