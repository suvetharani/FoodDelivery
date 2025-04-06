// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <div>Total: ${total}</div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
