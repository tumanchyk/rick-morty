import ICharacterItem from "./characterItem";

export default interface IFetchCharactersResponse {
  characters: ICharacterItem[];
  total: number;
}