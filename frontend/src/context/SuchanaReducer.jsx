import React from "react";

function SuchanaReducer(state, action) {
  switch (action.type) {
    case "GET_HELLO_WORLD":
      return { ...state, hello: action.payload };

    default:
      return state;
  }
}

export default SuchanaReducer;
