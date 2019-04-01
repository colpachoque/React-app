import React from 'react';
import styles from './MovieDetails.css';
import { Button } from '@material-ui/core';

class MovieDetails extends React.Component {
    render () {
        const { movie } = this.props;
        return (
            <div className={styles.movieCard}>
                <div className={styles.movieImg}></div>
                <div className={styles.movieInfo}>
                    <div className={styles.name}>{movie.name}</div>
                    <div style={{display: 'flex'}}>
                        <div className={styles.year}>{movie.year}</div>
                        <div className={styles.genre}>{movie.duration} min</div>
                    </div>
                    <div className={styles.description}>{movie.description}</div>
                </div>
                <div>
                    <Button>Search</Button>
                </div>
            </div>
        );
    }
}

export default MovieDetails;