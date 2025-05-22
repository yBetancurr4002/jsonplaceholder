import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ExternalPosts from './components/ExternalPosts';
function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">JSONPlaceholder Posts</h1>
      <PostForm />
      <PostList />
      <ExternalPosts />
    </div>
  );
}

export default App;
