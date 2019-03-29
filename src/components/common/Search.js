import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import styles from '../Header.css';

const Search = (props) => (
    <div className={styles.search}>
        <div>
            {props.label}
        </div>
        <div>
            <TextField
                value={props.value}
                onChange={({ target }) => props.onChange(target.value)}
            />
        </div>
        <div>
            SEARCH BY
            <RadioGroup>
                <FormControlLabel
                    value="title"
                    control={<Radio color="primary" />}
                    label="Title"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="genre"
                    control={<Radio color="primary" />}
                    label="Genre"
                    labelPlacement="start"
                />
            </RadioGroup>
            <Button>Search</Button>
        </div>
    </div>
);

export default Search;