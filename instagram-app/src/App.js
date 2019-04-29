import React from 'react';
import './util/reset.sass';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostList from './Components/PostContainer/PostList';


class App extends component {
  
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className = "App">
      <SearchBar />
      <PostList posts = {text} />
      </div>
    );
  }
}

export default App;
