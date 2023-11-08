import {gql} from '@apollo/client';
import { client } from './server';

export async function fetchCharacterById(characterId: number) {
  try {
    const result = await client.query({
      query: gql`
        query GetCharacter($id: ID!) {
          character(id: $id) {
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
            info {
              count
            }
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

    const characters = result.data.characters.results.slice(0, 6);
    const total = result.data.characters.info.count;
    return {characters, total};
  } catch (error) {
    console.error(error);
  }
}



