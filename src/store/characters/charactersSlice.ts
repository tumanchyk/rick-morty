import { createSlice } from "@reduxjs/toolkit";

import ICharacter from "../../types/character";
import ICharacterItem from "../../types/characterItem";

import { getCharacterById, getCharacters } from "./charactersOperations";

const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        characters: [] as ICharacterItem[],
        total: 0,
        currentCharacter: {} as ICharacter,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCharacterById.fulfilled, (state, action) => {
            state.currentCharacter = action.payload;
        });
        builder.addCase(getCharacterById.rejected, (_, action) => {
            console.error("Error fetching character:", action.error);
        });
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.characters = action.payload.characters;
            state.total = action.payload.total;
        });
        builder.addCase(getCharacters.rejected, (_, action) => {
            console.error("Error fetching characters:", action.error);
        });
    },
});

export const charactersReducer = charactersSlice.reducer;