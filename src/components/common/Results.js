import React from "react";
import styles from "../header/Header.css";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { updateSortBy } from "../../actions/search.action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Results = props => (
  <div className={styles.results}>
    <div className={styles.resultsContainer}>
      {!props.location.pathname.includes("/movie/") ? (
        <>
          <div className={styles.resultsInfo}>{props.info}</div>
          <div className={styles.resultsSort}>Sort by</div>
          <div className={styles.radioGroup}>
            <RadioGroup
              row
              value={props.sortBy}
              onChange={({ target }) => {
                props.updateSortBy(target.value);
              }}
            >
              <FormControlLabel
                value="release-date"
                control={<Radio color="primary" />}
                label="Release Date"
                labelPlacement="start"
              />
              <FormControlLabel
                value="rating"
                control={<Radio color="primary" />}
                label="Rating"
                labelPlacement="start"
              />
            </RadioGroup>
          </div>
        </>
      ) : (
        <div className={styles.resultsInfo}>Films by {props.genre}</div>
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return { sortBy: state.search.sortBy, genre: state.movies.genre };
};
export default withRouter(
  connect(
    mapStateToProps,
    { updateSortBy }
  )(Results)
);
