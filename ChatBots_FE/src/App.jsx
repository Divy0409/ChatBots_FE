// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Chatbots from './components/chatbots';
import About from './components/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbots" element={<Chatbots />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
