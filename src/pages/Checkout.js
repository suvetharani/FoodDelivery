// src/pages/Checkout.js
import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <Container>
      <Typography variant="h4">Checkout</Typography>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <Typography variant="h6">Total: ${totalAmount}</Typography>
      <Button variant="contained" color="primary">Place Order</Button>
    </Container>
  );
};

export default Checkout;
