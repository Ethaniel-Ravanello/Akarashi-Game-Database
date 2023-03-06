import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./features/searchSlice";
import { refetchSlice } from "./features/refetchSlice";

export const store = configureStore({
  reducer: {
    gameFilter: filterSlice.reducer,
    gameRefetch: refetchSlice.reducer,
  },
});
