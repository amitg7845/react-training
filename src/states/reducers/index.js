import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 5 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // Action creators are generated for each case reducer function
export default counterSlice.reducer; // Reducer function to be used in the store
