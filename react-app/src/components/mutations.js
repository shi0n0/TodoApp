import { gql } from '@apollo/client';

export const ADD_TEXT_MUTATION = gql`
  mutation AddText($text: String!) {
    addText(text: $text) {
      id
      text
    }
  }
`;
