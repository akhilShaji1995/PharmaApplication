import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className="container">
      <h1>Product Details</h1>
      <p>Here you can find details of our pharmaceutical products.</p>
      <nav>
        <ul>
          <li>
            <Link to="product-details-component">Product Details Component</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductDetails;
