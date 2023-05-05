import React from "react";

function MoviesReducer(state, action) {
  switch (action.type) {
    case "GET_TRENDING_MOVIES":
      return { ...state, trendingMovies: action.payload };

    default:
      return state;
  }
}

export default MoviesReducer;
