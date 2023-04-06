import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payloads;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
