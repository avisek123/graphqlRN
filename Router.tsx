import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_POSTS} from './graphql/allPosts';

const Router = () => {
  const {data, loading, error} = useQuery(GET_ALL_POSTS);
  console.log('data', data);
  console.log('error', error);
  return (
    <View
      style={{
        flex: 1,
      }}>
      {loading ? (
        <>
          <ActivityIndicator size={'large'} />
        </>
      ) : (
        <ScrollView>
          <View
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              {data?.posts?.data?.length} Data
            </Text>
            {data?.posts?.data?.map((item: any) => (
              <View
                style={{
                  padding: 4,
                }}
                key={item?.id}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {item?.title}
                </Text>
                <Text>{item?.body}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({});
