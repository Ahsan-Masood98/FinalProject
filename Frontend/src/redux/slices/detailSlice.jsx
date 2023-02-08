import { createSlice } from "@reduxjs/toolkit";

import { getGameDetail, getGameScreenshots } from "../actions/gameDetail";

const initialState = {
  gameDetail: {},
  gameScreenshot: [],
  isLoading: true,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    isLoaded: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getGameDetail.fulfilled, (state, action) => ({
      // Add game detail to the state object
      ...state,
      gameDetail: action.payload.data,
    }));
    builder.addCase(getGameScreenshots.fulfilled, (state, action) => ({
      // Add game detail to the state object
      ...state,
      gameScreenshot: action.payload.data.results,
    }));
  },
});

export const { isLoaded } = detailSlice.actions;
export const selectGameDetail = (state) => state.detail.gameDetail;
export const selectGameScreenshots = (state) => state.detail.gameScreenshot;

export default detailSlice.reducer;
