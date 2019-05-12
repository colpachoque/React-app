import React from "react";
import styles from "./MovieCard.css";
import { HashRouter as Link, NavLink } from "react-router-dom";
class MovieCard extends React.Component {
  render() {
    return (
      <div className={styles.movieCard}>
        <div className={styles.movieImg} />
        <div className={styles.movieInfo}>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.year}>{this.props.year}</div>
          <div className={styles.genre}>{this.props.genre.join(", ")}</div>
        </div>
        <NavLink to={`/movie/${this.props.movieId}`}>Details</NavLink>
      </div>
    );
  }
}

export default MovieCard;
