import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {
        storedList: [] as string[],
    },
    reducers: {
        setActions: (state, action) => {
            state.storedList = action.payload;
            window.localStorage.setItem("ActionList", JSON.stringify(state.storedList));

        },
        addActions: (state, action: PayloadAction<string>) => {
            state.storedList.push(action.payload);
            window.localStorage.setItem("ActionList", JSON.stringify(state.storedList));
        },
    },  
});

export const { setActions, addActions } = historySlice.actions;
export const historyReducer = historySlice.reducer;