import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      gender
      species
      type
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

export default GET_CHARACTER;
