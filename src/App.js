// src/App.js
import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts/sample-post.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <main>
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </main>
    </div>
  );
};

export default App;
