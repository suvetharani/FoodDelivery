// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Box } from '@mui/material';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data to simulate restaurant fetch
    const mockData = [
      { id: 1, name: 'Italian Bistro', image: '/images/restaurant1.jpg' },
      { id: 2, name: 'Sushi Place', image: '/images/restaurant2.jpg' },
      { id: 3, name: 'Burger Shack', image: '/images/restaurant3.jpg' },
      { id: 4, name: 'DLzengoff', image: '/images/restaurant4.jpg' },
      { id: 5, name: 'Café Blanc', image: '/images/restaurant5.jpg' },
      { id: 6, name: 'Wildwood Espresso', image: '/images/restaurant6.jpeg' },
    ];

    setTimeout(() => {
      setRestaurants(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
        height: '100vh', // Make sure the container takes full height
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {restaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <RestaurantCard
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
