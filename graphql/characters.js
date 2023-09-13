import { gql } from '@apollo/client';

export const getAllCharacters = gql`
  query AllPeople($first: Int) {
    data: allPeople(first: $first) {
      totalCount
      list: people {
        id
        title: name
      }
    }
  }
`;

export const getCharacter = gql`
  query Person($personId: ID) {
    person(id: $personId) {
      id
      name
      filmConnection {
        films {
          id
          name: title
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
    }
  }
`;
