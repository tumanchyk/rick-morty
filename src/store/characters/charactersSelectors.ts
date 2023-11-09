import { RootState } from "../store";
export const selectCharacterById = (state: RootState) => state.characters.currentCharacter;
export const selectCharacters = (state: RootState) => state.characters.characters;
export const selectTotalCharacters = (state: RootState) => state.characters.total;