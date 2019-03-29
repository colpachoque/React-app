import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import styles from '../Header.css';

const Results = (props) => (
    <div>
        <div>
            {props.reultsCount}
        </div>
        <div>
            Sort by
        </div>
    </div>
);

export default Results;