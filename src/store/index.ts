import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import channelCodeReducer from "./channelCode";

export const store = configureStore({
  reducer: {
    channelCodeStore: channelCodeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
