import { getMovies, getMovieById } from "../api/api";
import "babel-polyfill";
import { call, put, all, takeLatest } from "redux-saga/effects";

export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS",
  GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE",
  FETCH_USER_BY_ID = "FETCH_BY_ID",
  GET_MOVIE_BY_ID_SUCCESS = "GET_MOVIE_BY_ID_SUCCESS",
  UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const loadMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  movies
});

export const getMovie = userId => ({
  type: FETCH_USER_BY_ID,
  payload: userId
});

export const loadError = error => ({
  type: GET_MOVIES_FAILURE,
  error
});

// export const getMovie = id => dispatch => {
//   getMovieById(id)
//     .then(movie => {
//       dispatch(loadMovieByIdSuccess({ movie: movie, genre: movie.genres[0] }));
//     })
//     .catch(error => dispatch(loadError(error)));
// };

export const getAllMovies = () => dispatch => {
  getMovies()
    .then(movies => {
      dispatch(loadMoviesSuccess(movies));
    })
    .catch(error => dispatch(loadError(error)));
};

export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  payload: user
});

// Sagas
export function* fetchUserByIdAsync(action) {
  const response = yield call(
    fetch,
    `http://reactjs-cdp.herokuapp.com/movies/${action.payload}`
  );
  const user = yield response.json();

  yield put(loadMovieByIdSuccess(user));
}
export function* watchGetMovieById() {
  yield takeLatest(FETCH_USER_BY_ID, fetchUserByIdAsync);
}

// Users Saga
export function* movieSaga() {
  yield all([watchGetMovieById()]);
}
