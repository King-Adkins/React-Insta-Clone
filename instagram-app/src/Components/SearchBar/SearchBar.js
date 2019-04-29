import React from 'react';
import { Input } from 'reactstrap';
import './SearchBar.sass';
import Logo from './Logo';
import SearchInput from './SearchInput';
import SearchIcons from './SearchIcons';

const SearchBar = props => {
    return (
      <nav className = 'search'>
        <div className = 'search-content'>
            <Logo />
            <SearchInput />
            <SearchIcons />
        <div className = 'search-social_icons' />
        </div>
      </nav>
       
    );
};

export default SearchBar;