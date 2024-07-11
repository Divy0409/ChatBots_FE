// src/App.js

import React, { useEffect } from 'react';
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom';
import Home from './components/home';
import Chatbots from './components/chatbots';
import About from './components/about';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the Chatbots Homepage";
        break;
      case "/chatbots":
        title = "Chatbots";
        metaDescription = "List of Chatbots";
        break;
      case "/about":
        title = "About Us";
        metaDescription = "Learn more about us";
        break;
      default:
        title = "Chatbot Application";
        metaDescription = "Chatbot Application";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbots" element={<Chatbots />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
