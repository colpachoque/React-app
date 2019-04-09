import React from 'react';
import styles from './MainPage.css';
import MovieCard from '../movie-card/MovieCard';

const movies = [
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    },
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    }, 
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    }, 
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    },
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    },
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    },
    {
        name: 'Kill Bill',
        genre: 'Action and adventure',
        year: 2004
    }
];

class MainPage extends React.Component {
    render () {
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