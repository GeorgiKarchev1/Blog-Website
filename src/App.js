// src/App.js
import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/posts/sample-post.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleSubscribe = () => {
    // Implement your subscription logic here
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='general-h1'>Just Read It</h1>
        <p className='general'>My blog is brief, but each post will inform you more than you expect.</p>
        <div className="subscription-container">
          <input 
            type="email" 
            placeholder="Enter your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
        </div>
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
