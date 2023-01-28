import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SINGLE_POST} from './graphql/SinglePost';
import {useQuery} from '@apollo/client';

const SinglePost = () => {
  const {data, loading, error} = useQuery(SINGLE_POST, {
    variables: {id: 1},
  });
  console.log('data', data);
  console.log('error', error);
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        Single Post
      </Text>
      <Text>{data?.post?.title}</Text>
      <Text>{data?.post?.body}</Text>
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({});
