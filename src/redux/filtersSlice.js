import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: "",
};

const slice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
});

export const filtersReducer = slice.reducer;
export const { setFilters } = slice.actions;