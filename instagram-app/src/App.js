import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterPosts: []
    };
  }
  componentDidMount () {
    this.setState({posts: dummyData});
}
searchPostHandler = e => {
  const posts = this.state.posts.filter(p => {
    if (p.username.includes(e.target.value)) {
      return p;
    }
  })
}
  render() {
    return (
      <div className = "App">
      <SearchBar />
      <PostContainer posts = {this.state.posts} />
      </div>
    );
  }
}

export default App;
