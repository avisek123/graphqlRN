import {gql} from '@apollo/client';

export const ADD_TODO = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
