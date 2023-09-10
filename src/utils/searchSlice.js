import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
  },
  reducers: {
    addSuggestion: (state, action) => {
      
      state.cache = {...state.cache, ...action.payload};
    },
  },
});

export const { addSuggestion } = searchSlice.actions;
export default searchSlice.reducer;
