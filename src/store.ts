import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    gameFilter: filterSlice.reducer,
  },
});
