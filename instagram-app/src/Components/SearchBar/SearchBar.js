import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
      <div className = 'search-bar-wrapper'>
        <div className = 'social'>
          <i className = 'icon-instagram' />
        </div>
        <div>
          <input type = 'text' placeholder = 'Search' />
        </div>
        <div className = "social-wrapper">
          <div className = 'social'>
            <i className = 'icon-compass' />
          </div>
          <div className = 'social'>
            <i className = 'icon-heart' />
          </div>
          <div className = 'social'>
            <i className = 'icon-circle' />
          </div>
        </div>
      </div>
       
    );
};

export default SearchBar;