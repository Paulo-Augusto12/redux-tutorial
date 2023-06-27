import { configureStore } from "@reduxjs/toolkit";
import { COUNTER_REDUCER } from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: COUNTER_REDUCER,
  },
});

export type RootState = ReturnType<typeof store.getState>;
