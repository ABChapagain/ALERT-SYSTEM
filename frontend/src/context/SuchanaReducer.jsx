import React from 'react'

function MoviesReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload }

    case 'CHECK_CURRENT_USER':
      return { ...state, currentUser: action.payload }

    case 'GET_ALERTS':
      return { ...state, alerts: action.payload }

    case 'GET_USER':
      return { ...state, singleUser: action.payload }

    case 'GET_SINGLE_ALERT':
      return { ...state, singleAlert: action.payload }

    default:
      return state
  }
}

export default MoviesReducer
