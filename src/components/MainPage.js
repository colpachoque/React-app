import React from 'react';
import styles from './MainPage.css';
import MovieCard from './MovieCard';


class MainPage extends React.Component {
    render () {
        const { movies } = this.props;
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
                    : 'No moview found'
                }
            </div>
        );
    }
}

export default MainPage;