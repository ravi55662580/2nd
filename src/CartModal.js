import React from 'react';

const CartModal = ({ cart, onClose }) => {
  const groupedItems = cart.reduce((grouped, item) => {
    if (!grouped[item.name]) {
      grouped[item.name] = [];
    }
    grouped[item.name].push(item);
    return grouped;
  }, {});
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePlaceOrder = () => {
    alert('Order placed!');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Shopping Cart</h2>
        <ul>

          {Object.entries(groupedItems).map(([name, items]) => (
            <li key={name}>
              <span>
                {name} - Sizes: {items.map(item => `${item.size} (${item.quantity})`).join(', ')}
              </span>
              <span>Total Price: Rs {(items.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <p>Total: Rs {calculateTotalPrice().toFixed(2)}</p>

        <div className="button-container">
          <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
