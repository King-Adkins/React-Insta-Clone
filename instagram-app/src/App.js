import React from 'react';
import './util/reset.sass';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import shortid from 'shortid';

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
      {this.state.posts.map(post => (
        <PostContainer post = {post} key = {shortid.generate()} />
      ))}
      </div>
    );
  }
}

export default App;
