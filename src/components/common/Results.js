import React from "react";
import styles from "../header/Header.css";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { updateSortBy } from "../../actions/search.action";
import { connect } from "react-redux";

const Results = props => (
  <div className={styles.results}>
    <div className={styles.resultsContainer}>
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
    </div>
  </div>
);

const mapStateToProps = ({ search: { sortBy } }) => {
  return { sortBy };
};
export default connect(
  mapStateToProps,
  { updateSortBy }
)(Results);
