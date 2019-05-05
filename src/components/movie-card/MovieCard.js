import React from "react";
import styles from "./MovieCard.css";

const MovieCard = props => (
  <div className={styles.movieCard}>
    <div className={styles.movieImg} />
    <div className={styles.movieInfo}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.year}>{props.year}</div>
      <div className={styles.genre}>{props.genre.join(", ")}</div>
    </div>
  </div>
);

export default MovieCard;
