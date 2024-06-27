import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/product-details');
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to the Pharma application.</p>
      <nav>
        <ul>
          <li>
            <Link to="home-component">Home Component</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleNavigation} style={{ marginTop: '20px' }}>
        Go to Product Details
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
