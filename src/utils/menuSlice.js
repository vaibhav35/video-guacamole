import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { toggleState, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
