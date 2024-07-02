// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',  // Adjust this base URL if needed
});

export const fetchChatbots = () => API.get('/chatbots/');

// Add more API functions as needed
