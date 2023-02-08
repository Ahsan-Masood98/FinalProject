import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./slices/gamesSlice";
import detailReducer from "./slices/detailSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    detail: detailReducer,
  },
});
