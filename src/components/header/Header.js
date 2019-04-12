import React from 'react';
import styles from './Header.css';
import Search from '../common/Search';
import Copyright from '../common/Copyright';
import Results from '../common/Results';

class Header extends React.Component {
    state = {
        searchText: '',
        searchBy: 'title',
    };

    onSearchChange = searchValue => {
        this.setState({ searchText: searchValue });
    };

    onSearchFilterChange = filterValue => {
        this.setState({ searchBy: filterValue });
    };

    render() {
        return (
            <header className={styles.header}>
                <Copyright />
                <Search
                    label={'FIND YOUR MOVIE'}
                    value={this.state.searchText}
                    searchBy={this.state.searchBy}
                    onChange={this.onSearchChange}
                    onSearchFilterChange={this.onSearchFilterChange}
                />
                <Results info={'10 films found'} />
            </header>
        );
    }
}

export default Header;
