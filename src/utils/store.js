import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import searchReducer from "./searchSlice";
import liveMessageSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    search: searchReducer,
    liveChat: liveMessageSlice,
  },
});

export default store;
