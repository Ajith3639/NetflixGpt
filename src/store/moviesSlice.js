import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    recentMovies: null,
    trailerId: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    searchresults: null,
    showLoader: false,
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
    addSearchResults(state, action) {
      state.searchresults = action.payload;
    },
    removeSearchResults(state) {
      state.searchresults = null;
    },
    setLoader(state, action) {
      state.showLoader = action.payload;
    }
  },
});

export const {
  addRecentMovies,
  addTrailerId,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addSearchResults,
  removeSearchResults,
  setLoader
} = moviesSlice.actions;
export default moviesSlice.reducer;
