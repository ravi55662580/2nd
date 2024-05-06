import React, { createContext, useState } from 'react';

const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
