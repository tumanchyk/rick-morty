import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { historyReducer } from "./history/historySlice";
import { charactersReducer } from "./characters/charactersSlice";

const reducers = combineReducers({
    history: historyReducer,
    characters: charactersReducer,
});

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({
    reducer: reducers,
});