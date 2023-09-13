import { gql } from '@apollo/client';

export const getAllStarship = gql`
  query AllStarships($first: Int) {
    data: allStarships(first: $first) {
      totalCount
      list: starships {
        id
        title: name
      }
    }
  }
`;

export const getStarship = gql`
  query Starship($starshipId: ID) {
    starship(id: $starshipId) {
      id
      name
      pilotConnection {
        pilots {
          id
          name
        }
      }
      filmConnection {
        films {
          id
          name: title
        }
      }
    }
  }
`;
