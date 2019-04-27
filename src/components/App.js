import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import MovieDetails from "./movie-details/MovieDetails";
import ErrorBoundary from "./common/ErrorBoundary";

class App extends React.Component {
  state = {
    moviesFound: 0
  };
  updateFoundMovies = moviesFound => {
    this.setState({ moviesFound });
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header moviesFound={this.state.moviesFound} />
          <MainPage updateFoundMovies={this.updateFoundMovies} />
          {/* <MovieDetails /> */}
          <Footer />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
