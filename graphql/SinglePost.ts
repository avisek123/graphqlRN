import {gql} from '@apollo/client';

export const SINGLE_POST = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;
