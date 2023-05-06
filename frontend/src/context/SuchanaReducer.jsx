import React from "react";

function MoviesReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };

    case "CHECK_CURRENT_USER":
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
}

export default MoviesReducer;
