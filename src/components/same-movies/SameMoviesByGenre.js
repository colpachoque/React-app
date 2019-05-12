import React from "react";
import styles from "../main-page/MainPage.css";
import MovieCard from "../movie-card/MovieCard";
import { getAllMovies } from "../../actions/movies.action";
import { connect } from "react-redux";

class SameMoviesByGenre extends React.Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.movies
          ? this.props.movies.map(movie => (
              <MovieCard
                movieId={movie.id}
                key={movie.id}
                name={movie.title}
                genre={movie.genres}
                year={movie.release_date}
              />
            ))
          : "No movies found"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies:
      state.movies.movies &&
      state.movies.movies.filter(m => m.genres.includes(state.movies.genre))
  };
};
export default connect(
  mapStateToProps,
  { getAllMovies }
)(SameMoviesByGenre);
