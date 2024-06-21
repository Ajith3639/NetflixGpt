import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    recentMovies: null,
    trailerId: null,
  },
  reducers: {
    addRecentMovies(state, action) {
      state.recentMovies = action.payload;
    },
    addTrailerId(state, action) {
      state.trailerId = action.payload;
    },
  },
});

export const { addRecentMovies, addTrailerId } = moviesSlice.actions;
export default moviesSlice.reducer;
