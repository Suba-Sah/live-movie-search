import {
  CHANGE_SEARCHFIELD,
  REQUEST_MOVIES_PENDING,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchMovies = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateMovies = {
  movies: [],
  isPending: true
}

export const requestMovies = (state=initialStateMovies, action={}) => {
  switch (action.type) {
    case REQUEST_MOVIES_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_MOVIES_SUCCESS:
      return Object.assign({}, state, {movies: action.payload, isPending: false})
    case REQUEST_MOVIES_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
