import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./slices/gamesSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
