import React from "react";
import styles from "./MovieDetails.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getMovie } from "../../actions/movies.action";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import NotFound from "../not-found/NotFound";
class MovieDetails extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.getMovie(this.props.match.params.id);
    }
  }

  componentWillMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;
    return (
      <>
        {this.props.movie ? (
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
              <Button>
                <NavLink to="/">Search</NavLink>
              </Button>
            </div>
          </div>
        ) : (
          <Route exact path="*" component={NotFound} />
        )}
      </>
    );
  }
}

const mapStateToProps = ({ movies: { movie } }) => {
  return { movie };
};
export default connect(
  mapStateToProps,
  { getMovie }
)(MovieDetails);
