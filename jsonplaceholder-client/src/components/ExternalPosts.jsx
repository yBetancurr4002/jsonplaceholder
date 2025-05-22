// src/components/ExternalPosts.jsx
import React, { useEffect, useState } from 'react';
import { getExternalPosts } from '../services/api';
import PostCard from './PostCard';

function ExternalPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getExternalPosts();
        setPosts(res.data);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-4">Posts desde API externa</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExternalPosts;
