import { createSlice } from "@reduxjs/toolkit";

import {
  getNewGamesList,
  getPopularGamesList,
  getUpcommingGamesList,
} from "../actions/gamesAction";

const initialState = {
  popular: [],
  upcomming: [],
  new: [],
};

export const gamesSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(addProduct.fulfilled, (state, action) => ({
    //   // append new product to existing state products array
    //   ...state,
    //   products: [...state.products, action.payload],
    // }));
    builder.addCase(getPopularGamesList.fulfilled, (state, action) => ({
      // Add games to the state array
      ...state,
      popular: action.payload.data.results,
    }));
    builder.addCase(getUpcommingGamesList.fulfilled, (state, action) => ({
      // Add games to the state array
      ...state,
      upcomming: action.payload.data.results,
    }));
    builder.addCase(getNewGamesList.fulfilled, (state, action) => ({
      // Add games to the state array
      ...state,
      new: action.payload.data.results,
    }));
  },
});

export const selectPopularGames = (state) => state.game.popular;
export const selectUpcommingGames = (state) => state.game.upcomming;
export const selectNewGames = (state) => state.game.new;

export default gamesSlice.reducer;
