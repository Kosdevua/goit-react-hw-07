import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const selectFilter = (state) => state.filter.filter;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
