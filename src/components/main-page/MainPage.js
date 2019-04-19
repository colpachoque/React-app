import React from "react";
import styles from "./MainPage.css";
import MovieCard from "../movie-card/MovieCard";
import { movies } from "../const/const";

class MainPage extends React.Component {
  state = {
    movies: movies
  };

  render() {
    console.log(this.props.search);
    return (
      <div className={styles.container}>
        {this.state.movies.length
          ? movies
              .filter(m => m.name.includes(this.props.search))
              .map((movie, index) => (
                <MovieCard
                  key={index}
                  name={movie.name}
                  genre={movie.genre}
                  year={movie.year}
                />
              ))
          : "No movies found"}
      </div>
    );
  }
}

export default MainPage;
