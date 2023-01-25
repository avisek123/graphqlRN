import {gql} from '@apollo/client';
export const GET_ALL = gql`
  query resultData {
    users {
      name
    }
  }
`;
