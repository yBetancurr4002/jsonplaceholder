// src/services/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:5147/api/posts';

export const getExternalPosts = () => axios.get(API_BASE);
export const getDbPosts = () => axios.get(`${API_BASE}/dbposts`);
export const importPosts = () => axios.post(`${API_BASE}/import`);
export const getPostById = (id) => axios.get(`${API_BASE}/${id}`);
export const createPost = (post) => axios.post(API_BASE, post);
