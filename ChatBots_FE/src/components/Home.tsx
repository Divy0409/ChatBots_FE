// src/components/Home.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome!</h2>
      <section className="cardRow">
        <NavLink to="/chatbots">
          <div className="card">
            <div className="cardHeader" style={{ backgroundColor: "Blue" }}>
              <h3>Chatbots</h3>
            </div>
            <div className="cardContainer">
              <p>Explore and manage your chatbots.</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/about">
          <div className="card">
            <div className="cardHeader" style={{ backgroundColor: "Green" }}>
              <h3>About Us</h3>
            </div>
            <div className="cardContainer">
              <p>Learn more about our team and mission.</p>
            </div>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
