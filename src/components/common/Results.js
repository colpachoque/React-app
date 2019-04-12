import React from 'react';
import styles from '../header/Header.css';

const Results = props => (
    <div className={styles.results}>
        <div className={styles.resultsContainer}>
            <div className={styles.resultsInfo}>{props.info}</div>
            <div className={styles.resultsSort}>Sort by</div>
        </div>
    </div>
);

export default Results;
