// src/components/Chatbots.tsx
import React, { useState, useEffect } from 'react';
import { fetchChatbots } from '../api';
import '../styles/main.css';

interface Chatbot {
  id: number;
  name: string;
}

const Chatbots: React.FC = () => {
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);

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
