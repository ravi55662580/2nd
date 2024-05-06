import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = ({ addToCart }) => {
  const { products, setProducts } = useContext(ProductContext);
  

  const handleAddToCart = (product, size) => {
    if (product.quantities[size.toLowerCase()] > 0) {
      addToCart(product, size);
      const updatedProducts = products.map((p) => {
        if (p.name === product.name) {
          return {
            ...p,
            quantities: {
              ...p.quantities,
              [size.toLowerCase()]: p.quantities[size.toLowerCase()] - 1,
            },
          };
        }
        return p;
      });
      setProducts(updatedProducts);
    } else {
      alert("Item is out of stock!");
    }
  };

  return (
    <div className="product-list">
      <h2>Added T-Shirts</h2>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product">
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: Rs {product.price}</p>
            <p>Quantities:</p>
            <ul>
              <li>Large: {product.quantities.large} <button onClick={() => handleAddToCart(product, 'Large')}>Add to Cart</button></li>
              <li>Medium: {product.quantities.medium} <button onClick={() => handleAddToCart(product, 'Medium')}>Add to Cart</button></li>
              <li>Small: {product.quantities.small} <button onClick={() => handleAddToCart(product, 'Small')}>Add to Cart</button></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
