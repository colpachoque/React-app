import React from 'react';
import styles from './Header.css';
import Search from './common/Search';

class Header extends React.Component {
    state = {
      searchText: ''
    };

    onSearchChange = (v) => {
        this.setState({ searchText: v})
    };
    render () {
        console.log(styles);
        return (
            <header className={styles.header}>
                <Search label={'FIND YOUR MOVIE'} value={this.state.searchText} onChange={this.onSearchChange}/>
                
            </header>
        );
    }
}

export default Header;