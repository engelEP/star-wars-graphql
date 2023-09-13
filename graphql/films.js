import { gql } from '@apollo/client';

export const getAllFilms = gql`
  query ($first: Int) {
    data: allFilms(first: $first) {
      totalCount
      list: films {
        id
        title: title
        openingCrawl
      }
    }
  }
`;

export const getFilm = gql`
  query Film($filmId: ID) {
    film(id: $filmId) {
      id
      title
      openingCrawl
      starshipConnection {
        starships {
          id
          name
        }
      }
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;
