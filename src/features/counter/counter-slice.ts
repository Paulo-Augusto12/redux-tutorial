import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterState = { value: number };

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementAmount: (state: counterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementAmount } = counterSlice.actions;

export const COUNTER_REDUCER = counterSlice.reducer;
