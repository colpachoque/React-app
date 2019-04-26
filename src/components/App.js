import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import MovieDetails from "./movie-details/MovieDetails";
import ErrorBoundary from "./common/ErrorBoundary";

class App extends React.Component {
  state = {
    searchText: ""
  };

  onSearch = searchText => this.setState({ searchText });

  componentDidMount() {}

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header onSearch={this.onSearch} />
          {/*<MainPage search={this.state.searchText}/>*/}
          <MovieDetails />
          <Footer />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
