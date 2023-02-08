import { createAsyncThunk } from "@reduxjs/toolkit";
import { gameDetailsURL, gameScreenshotURL } from "../../api/games_api";
import axios from "axios";

export const getGameDetail = createAsyncThunk(
  "detail/getDetail",
  async (id) => {
    const res = await axios.get(gameDetailsURL(id));
    return res;
  }
);
export const getGameScreenshots = createAsyncThunk(
  "detail/getScreen",
  async (id) => {
    const res = await axios.get(gameScreenshotURL(id));
    return res;
  }
);
