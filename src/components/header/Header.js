import React from "react";
import styles from "./Header.css";
import Search from "../common/Search";
import Copyright from "../common/Copyright";
import Results from "../common/Results";
import { updateSearchBy, searchInit } from "../../actions/search.action";
import { connect } from "react-redux";

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
        <Copyright />
        <Search
          label={"FIND YOUR MOVIE"}
          value={this.state.searchText}
          searchBy={this.props.searchBy}
          onChange={this.onSearchChange}
          onSearch={this.onSearch}
          onSearchFilterChange={this.onSearchFilterChange}
        />
        <Results info={`${this.props.moviesFound} films found`} />
      </header>
    );
  }
}

const mapStateToProps = ({ search: { searchBy, moviesFound } }) => {
  return { searchBy, moviesFound };
};
export default connect(
  mapStateToProps,
  { updateSearchBy, searchInit }
)(Header);
