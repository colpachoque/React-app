import React from "react";
import styles from "./MainPage.css";
import MovieCard from "../movie-card/MovieCard";
import { getAllMovies } from "../../actions/movies.action";
import { connect } from "react-redux";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    console.log(this.props.movies);
    return (
      <div className={styles.container}>
        {this.props.movies
          ? this.props.movies
              .filter(m =>
                m.title.toLowerCase().includes(this.props.search.toLowerCase())
              )
              .map(movie => (
                <MovieCard
                  key={movie.id}
                  name={movie.title}
                  genre={movie.genres}
                  year={movie.year}
                />
              ))
          : "No movies found"}
      </div>
    );
  }
}

const mapStateToProps = ({ movies = [] }) => {
  return movies;
};
export default connect(
  mapStateToProps,
  { getAllMovies }
)(MainPage);
