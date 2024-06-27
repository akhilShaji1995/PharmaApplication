// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import HomeComponent from './components/HomeComponent';
import ProductDetailsComponent from './components/ProductDetailsComponent';

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
        <Route path="/" element={<Home />}>
          <Route path="home-component" element={<HomeComponent />} />
        </Route>
        <Route path="/product-details" element={<ProductDetails />}>
          <Route path="product-details-component" element={<ProductDetailsComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
