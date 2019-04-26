import { getMovies, getMovieById } from "../api/api";

export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS",
  GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE",
  GET_MOVIE_BY_ID_SUCCESS = "GET_MOVIE_BY_ID_SUCCESS";

export const loadMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  movies
});

export const loadMovieByIdSuccess = movie => ({
  type: GET_MOVIE_BY_ID_SUCCESS,
  movie
});

export const loadError = error => ({
  type: GET_MOVIES_FAILURE,
  error
});

export const getMovie = id => dispatch => {
  getMovieById(id)
    .then(movie => {
      console.log("Get movie by id", movie);
      dispatch(loadMovieByIdSuccess(movie));
    })
    .catch(error => dispatch(loadError(error)));
};

export const getAllMovies = () => dispatch => {
  getMovies()
    .then(movies => {
      dispatch(loadMoviesSuccess(movies));
    })
    .catch(error => dispatch(loadError(error)));
};
