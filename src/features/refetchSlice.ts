import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  refetch: false,
};

export const refetchSlice = createSlice({
  name: "refetch",
  initialState,
  reducers: {
    toggleRefetch: (state) => {
      state.refetch = !state.refetch;
    },
    clearRefetch: (state) => {
      state.refetch = true;
    },
  },
});

export const { toggleRefetch, clearRefetch } = refetchSlice.actions;
export default refetchSlice.reducer;
