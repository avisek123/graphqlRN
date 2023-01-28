import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_POST} from './graphql/UpdatePost';

const UpdatePost = () => {
  const [body, setBody] = React.useState('');
  const [updatePost, {data, loading, error, reset}] = useMutation(UPDATE_POST, {
    variables: {
      id: 1,
      input: {
        body: body,
      },
    },
  });

  console.log('data', data);
  console.log('error', error);

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          marginTop: 30,
          fontWeight: 'bold',
        }}>
        Update
      </Text>

      <TextInput
        placeholder="body"
        value={body}
        onChangeText={txt => setBody(txt)}
      />
      <Button
        title="Save"
        onPress={() => {
          updatePost();
          reset();
        }}
      />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          marginTop: 30,
          fontWeight: 'bold',
        }}>
        Result
      </Text>
      {data && (
        <>
          <Text>Body : {data?.updatePost?.body}</Text>
        </>
      )}
    </View>
  );
};

export default UpdatePost;

const styles = StyleSheet.create({});
