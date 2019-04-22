import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import MainPage from './main-page/MainPage';
import ErrorBoundary from './common/ErrorBoundary';

let App = () => (
    <>
        <ErrorBoundary>
            <Header />
            <MainPage />
            <Footer />
        </ErrorBoundary>
    </>
);

export default App;
