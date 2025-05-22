import React, { useEffect, useState } from 'react';
import { getExternalPosts, importPosts } from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await getExternalPosts();
    setPosts(res.data);
  };

  const handleImport = async () => {
    await importPosts();
    await loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <button className="btn btn-secondary mb-3" onClick={handleImport}>Importar desde API externa</button>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <small>User ID: {post.userId}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
