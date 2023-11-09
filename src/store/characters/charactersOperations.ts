import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCharacterById, fetchCharacters } from "../../api/api";
import ICharacter from "../../types/character";
import IFetchCharactersResponse from "../../types/fetchCharactersResponse";

export const getCharacterById = createAsyncThunk<ICharacter, number>(
    "characters/fetchCharacterById",
    async (characterId: number, { rejectWithValue }) => {
        try {
            const characterData = await fetchCharacterById(characterId);
            return characterData;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const getCharacters = createAsyncThunk<IFetchCharactersResponse, number>(
    "characters/fetchCharacters",
    async (page, { rejectWithValue }) => {
        try {
            const { characters, total } = await fetchCharacters(page) as IFetchCharactersResponse;
            return { characters, total };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);