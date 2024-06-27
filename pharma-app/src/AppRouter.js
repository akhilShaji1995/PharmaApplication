// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product-details">Product Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
