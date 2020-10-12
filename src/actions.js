import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_MOVIES_PENDING,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestMovies = (query) => (dispatch) => {
  query = query?query:'rock';
  dispatch({ type: REQUEST_MOVIES_PENDING })
  apiCall('https://api.themoviedb.org/3/search/movie?api_key=6c83f9770b500e69f92f0d1ab87adba5&query='+query)
    .then(data => dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: data['results'] }))
    .catch(error => dispatch({ type: REQUEST_MOVIES_FAILED, payload: error }))
}