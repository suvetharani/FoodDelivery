// src/components/MenuItemCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const MenuItemCard = ({ id, name, description, price, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
        <Typography variant="body1" color="primary">${price}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => addToCart({ id, name, price })}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
