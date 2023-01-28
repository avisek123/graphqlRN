import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useMutation} from '@apollo/client';
import {ADD_TODO} from './graphql/CreatePost';

const CreatePost = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [createPost, {data, loading, error, reset}] = useMutation(ADD_TODO, {
    variables: {
      input: {
        title: title,
        body,
      },
    },
  });

  console.log('data', data);
  console.log('error', error);

  return (
    <View>
      <TextInput
        placeholder="title"
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <TextInput
        placeholder="body"
        value={body}
        onChangeText={txt => setBody(txt)}
      />
      <Button
        title="Save"
        onPress={() => {
          createPost();
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
          <Text>title : {data?.createPost?.title}</Text>
          <Text>Body : {data?.createPost?.body}</Text>
        </>
      )}
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
