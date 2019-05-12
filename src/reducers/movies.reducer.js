export default function movies(state = {}, action) {
  switch (action.type) {
    case "GET_MOVIES_SUCCESS":
      return { ...state, movies: action.movies };
    case "GET_MOVIES_FAILURE":
      return { ...state, error: action.error };
    case "GET_MOVIE_BY_ID_SUCCESS":
      return { ...state, movie: action.movie.movie, genre: action.movie.genre };
    default:
      return state;
  }
}
