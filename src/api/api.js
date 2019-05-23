const prefix = "http://reactjs-cdp.herokuapp.com";
const headers = {};
// headers.append("Content-Type", "application/json");

const getMovies = () =>
  fetch(`${prefix}/movies`, headers)
    .then(m => m.json())
    .then(json => json.data);
const getMovieById = id =>
  fetch(`${prefix}/movies/${id}`, headers).then(m => m.json());
export { getMovies, getMovieById };
