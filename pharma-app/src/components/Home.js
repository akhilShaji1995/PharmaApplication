// src/components/Home.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Pharma application.</p>
      <nav>
        <ul>
          <li>
            <Link to="home-component">Home Component</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
