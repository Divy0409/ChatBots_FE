import React, { useState, useEffect } from 'react';
import { fetchChatbots } from '../api';  // Adjust path as per your file structure

const Chatbots = () => {
  const [chatbots, setChatbots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchChatbots();
        setChatbots(response.data);
      } catch (error) {
        console.error('Error fetching chatbots:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Chatbots</h1>
      <ul>
        {chatbots.map(chatbot => (
          <li key={chatbot.id}>{chatbot.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chatbots;

