import React from "react";
import styles from "./MovieDetails.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getMovie } from "../../actions/movies.action";

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.getMovie(240);
  }

  render() {
    const { movie } = this.props;
    console.log(this.props);
    return (
      <>
        {this.props.movie && (
          <div className={styles.movieCard}>
            <div className={styles.movieImg} />
            <div className={styles.movieInfo}>
              <div className={styles.name}>{movie.title}</div>
              <div style={{ display: "flex" }}>
                <div className={styles.year}>{movie.release_date}</div>
                <div className={styles.genre}>{movie.runtime} min</div>
              </div>
              <div className={styles.description}>{movie.description}</div>
            </div>
            <div>
              <Button>Search</Button>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ movie }) => {
  return { movie };
};
export default connect(
  mapStateToProps,
  { getMovie }
)(MovieDetails);
