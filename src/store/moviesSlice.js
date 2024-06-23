import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    recentMovies: null,
    trailerId: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addRecentMovies(state, action) {
      state.recentMovies = action.payload;
    },
    addTrailerId(state, action) {
      state.trailerId = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies(state, action) {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addRecentMovies,
  addTrailerId,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
