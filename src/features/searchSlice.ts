import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = "";
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
