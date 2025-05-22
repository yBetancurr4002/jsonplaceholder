import React from 'react';
import './PostCard.css';

function PostCard({ post }) {
  return (
    <div className="card post-card h-100">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <div className="card-footer">
        <span>User ID: {post.userId}</span>
      </div>
    </div>
  );
}

export default PostCard;
