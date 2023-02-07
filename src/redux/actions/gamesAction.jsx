import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  popularGamesURL,
  upcommingGamesURL,
  newGamesURL,
} from "../../api/games_api";
import axios from "axios";

// export const addProduct = createAsyncThunk(
//   "product/addProduct",
//   async (payload) => {
//     const res = await fetch(addProductURL(), {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     }).then((res) => res.json());
//     return res;
//   }
// );
export const getPopularGamesList = createAsyncThunk(
  "games/getPopular",
  async (payload) => {
    const res = await axios.get(popularGamesURL());
    return res;
  }
);
export const getUpcommingGamesList = createAsyncThunk(
  "games/getUpcomming",
  async (payload) => {
    const res = await axios.get(upcommingGamesURL());
    return res;
  }
);
export const getNewGamesList = createAsyncThunk(
  "games/getNew",
  async (payload) => {
    const res = await axios.get(newGamesURL());
    return res;
  }
);
