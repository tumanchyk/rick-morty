import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
});

// Функція для виконання запиту на основі ідентифікатора персонажа
function fetchCharacterById(characterId: number) {
  client
    .query({
      query: gql`
        query GetCharacter($id: ID!) {
          character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
            origin
          }
        }
      `,
      variables: {
        id: characterId,
      },
    })
    .then(result => {
      const characterData = result.data.character;
      console.log(characterData);
      // Тут ви можете обробити дані про персонажа
    })
    .catch(error => {
      console.error(error);
    });
}

export default fetchCharacterById