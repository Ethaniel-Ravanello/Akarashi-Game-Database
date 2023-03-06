import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fetch: false,
};

export const refetchSlice = createSlice({
    name : 'refetch',
    initialState,
    reducers : {
        toggleRefetch : (state) => {
            state.fetch = !state.fetch
        }
    }
});
