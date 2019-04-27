import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import ErrorBoundary from "./common/ErrorBoundary";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from "./not-found/NotFound";
import SameMoviesByGenre from "./same-movies/SameMoviesByGenre";
import styles from "./App.css";

class App extends React.Component {
  state = {
    moviesFound: 0
  };
  updateFoundMovies = moviesFound => {
    this.setState({ moviesFound });
  };

  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Header moviesFound={this.state.moviesFound} />

          <div className={styles.container}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/movie/:id" component={SameMoviesByGenre} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </ErrorBoundary>
      </Router>
    );
  }
}

export default App;
