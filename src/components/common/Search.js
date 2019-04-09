import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import styles from '../header/Header.css';

const Search = (props) => (
    <div className={styles.search}>
        <div>
            {props.label}
        </div>
        <div>
            <TextField
                value={props.value}
                style={{width: '100%'}}
                onChange={({ target }) => props.onChange(target.value)}
            />
        </div>
        <div className={styles.searchBySection}>
            <div className={styles.searchByLabel}>
                SEARCH BY
            </div>
            <div className={styles.radioGroup}>
                <RadioGroup 
                    row
                    value={props.searchBy}
                    onChange={({ target }) => props.onSearchFilterChange(target.value)}>
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
            </div>
            <Button>Search</Button>
        </div>
    </div>
);

export default Search;