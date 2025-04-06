// src/components/RestaurantCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ id, name, image }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center image horizontally
          alignItems: 'center', // Center image vertically
          height: 140, // Ensure fixed height for image box
          overflow: 'hidden', // Hide anything outside the box
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          image={image} // Ensure image path is correct
          sx={{
            objectFit: 'cover', // Makes the image cover the box without stretching
            width: '100%', // Ensure it takes full width of the box
            height: '100%', // Ensure it takes full height of the box
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Link to={`/restaurant/${id}`}>View Menu</Link>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
