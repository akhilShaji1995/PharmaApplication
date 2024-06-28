import React,{ useState } from 'react';
import products from '../data/products';

const ProductList = ({ addToCart }) => {

    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    var filteredProducts = products.filter(product =>
        filter ? product.category === filter : true
    );
    filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
        <div className="filters">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearchChange}
            />
            <select onChange={handleFilterChange} value={filter}>
                <option value="">All Categories</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
            </select>
        </div>
    <div className="product-list">
        
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <h5>Category: {product.category}</h5>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>

    </div>
  );
};

export default ProductList;
