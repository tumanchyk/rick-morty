import { ApolloClient, InMemoryCache, HttpLink, gql} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
});


async function fetchCharacterById(characterId: number) {
  try {
    const result = await client.query({
      query: gql`
        query GetCharacter($id: ID!) {
          character(id: $id) {
            id
            name
            status
            species
            gender
            image
            type
            origin { name }
            location{ name }
          }
        }
      `,
      variables: {
        id: characterId,
      },
    });
    const characterData = result.data.character;
    return characterData;
  } catch (error) {
    console.log(error);
  }
}


export async function fetchCharacters(page: number) {
  try {
    const result = await client.query({
      query: gql`
        query GetCharacters($page: Int!) {
          characters(page: $page) {
            results {
              id
              name
              status
              species
              image
              location{ name }
              origin { name }
            }
          }
        }
      `,
      variables: {
        page
      },
    });

    const characters = result.data.characters.results;
    return characters;
  } catch (error) {
    console.error(error);
  }
}




export async function fetchCharactersLimited(count: number) {
  try {
    const result = await client.query({
      query: gql`
        query GetCharacters($count: Int) {
          characters(count: $count) {
            results {
              name
              
            }
          }
        }
      `,
      variables: {
        count
      },
    });

    const characters = result.data.characters.results;
    return characters;
  } catch (error) {
    console.error(error);
    return [];
  }
}



export default fetchCharacterById