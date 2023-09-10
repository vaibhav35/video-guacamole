import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const liveMessageSlice = createSlice({
  name: "liveChat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      console.log(action, "action");
      state.messages = [...state.messages, ...action.payload];
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages} = liveMessageSlice.actions;
export default liveMessageSlice.reducer;
