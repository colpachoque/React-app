import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import styles from '../header/Header.css';

const Results = (props) => (
    <div className={styles.results}>
        <div className={styles.resultsContainer}>    
            <div className={styles.resultsInfo}>
                {props.info}
            </div>
            <div className={styles.resultsSort}>
                Sort by
            </div>
        </div>
    </div>
);

export default Results;