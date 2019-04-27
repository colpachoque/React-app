import React from "react";
import styles from "./Header.css";
import Search from "../common/Search";
import Copyright from "../common/Copyright";
import Results from "../common/Results";
import MovieDetails from "../movie-details/MovieDetails";
import { updateSearchBy, searchInit } from "../../actions/search.action";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
class Header extends React.Component {
  state = {
    searchText: ""
  };

  onSearchChange = searchValue => {
    this.setState({ searchText: searchValue });
  };

  onSearch = () => {
    this.props.searchInit(this.state.searchText);
  };

  onSearchFilterChange = filterValue => {
    this.props.updateSearchBy(filterValue);
  };

  render() {
    return (
      <header className={styles.header}>
        {!this.props.location.pathname.includes("/movie/") && (
          <>
            <Copyright />
            <Search
              label={"FIND YOUR MOVIE"}
              value={this.state.searchText}
              searchBy={this.props.searchBy}
              onChange={this.onSearchChange}
              onSearch={this.onSearch}
              onSearchFilterChange={this.onSearchFilterChange}
            />
          </>
        )}
        <Route exact path="/movie/:id" component={MovieDetails} />
        <Results info={`${this.props.moviesFound} films found`} />
      </header>
    );
  }
}

const mapStateToProps = ({ search: { searchBy, moviesFound } }) => {
  return { searchBy, moviesFound };
};
export default withRouter(
  connect(
    mapStateToProps,
    { updateSearchBy, searchInit }
  )(Header)
);
