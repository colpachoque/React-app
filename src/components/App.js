import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';

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
let App = () => (
    <>
        <Header/>
            <MainPage movies={movies}/>
        <Footer/>
    </>);

export default App;