import React from 'react';
import styles from './MainPage.css';
import MovieCard from '../movie-card/MovieCard';
import { movies } from '../const/const';

class MainPage extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {movies.length
                    ? movies.map((movie, index) => (
                          <MovieCard
                              key={index}
                              name={movie.name}
                              genre={movie.genre}
                              year={movie.year}
                          />
                      ))
                    : 'No moview found'}
            </div>
        );
    }
}

export default MainPage;
