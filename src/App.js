import React, { useState } from 'react';
import { ProductProvider } from './ProductContext';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import CartModal from './CartModal';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const addToCart = (product, size) => {
    const itemIndex = cart.findIndex((item) => item.name === product.name && item.size === size);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <ProductProvider>
      <div className="App">
        <header className="header">
          <h1>Add T-Shirt Product</h1>
          <button onClick={toggleCartModal} className="cart-button">Cart ({cart.length})</button>
        </header>
        <ProductForm />
        <ProductList addToCart={addToCart} />
        {showCartModal && <CartModal cart={cart} onClose={toggleCartModal} />}
      </div>
    </ProductProvider>
  );
};

export default App;
