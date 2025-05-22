import React, { useState } from 'react';
import { createPost } from '../services/api';

function PostForm() {
  const [post, setPost] = useState({ userId: '', title: '', body: '' });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(post);
    alert('Post creado');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input name="userId" className="form-control" placeholder="User ID" onChange={handleChange} />
      </div>
      <div className="mb-2">
        <input name="title" className="form-control" placeholder="Título" onChange={handleChange} />
      </div>
      <div className="mb-2">
        <textarea name="body" className="form-control" placeholder="Contenido" onChange={handleChange} />
      </div>
      <button className="btn btn-primary" type="submit">Crear Post</button>
    </form>
  );
}

export default PostForm;
