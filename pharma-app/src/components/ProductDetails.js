import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import products from '../data/products';
import ProductList from './ProductList';
import Cart from './Cart';

const ProductDetails = () => {

    const [cart, setCart] = useState([]);
    const addToCarts = (product) => {
        setCart([...cart, product]);
      };
      
  return (
    <div className="container">
      <h1>Product Details</h1>
      <p>Here you can find details of our pharmaceutical products.</p>
      {/* <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div> */}
      <ProductList addToCart={addToCarts} />
      <nav>
        <ul>
          <li>
            <Link to="product-details-component">Product Details Component</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      {/* <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div> */}
      <Cart cart={cart} />
    </div>
  );
};

export default ProductDetails;
