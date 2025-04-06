// src/pages/RestaurantDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Button, Typography } from '@mui/material';
import MenuItemCard from '../components/MenuItemCard'; // Import MenuItemCard component
import { useCart } from '../context/CartContext'; // Import CartContext to manage cart

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Mock restaurant details and menu data
    const mockRestaurants = [
      {
        id: 1,
        name: 'Italian Bistro',
        menu: [
          { id: 1, name: 'Pasta Carbonara', description: 'Delicious creamy pasta', price: 12.99 },
          { id: 2, name: 'Margherita Pizza', description: 'Classic pizza with fresh mozzarella', price: 9.99 },
          { id: 3, name: 'Bruschetta', description: 'Grilled bread topped tomato, garlic, and basil', price: 7.99 },
          { id: 4, name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, basil drizzled', price: 12.99 },
          { id: 5, name: 'Arancini', description: 'Fried rice balls stuffed with cheese or meat', price: 15.99 },
        ],
      },
      {
        id: 2,
        name: 'Sushi Place',
        menu: [
          { id: 1, name: 'California Roll', description: 'Sushi with crab and avocado', price: 8.99 },
          { id: 2, name: 'Salmon Nigiri', description: 'Fresh salmon on rice', price: 5.99 },
          { id: 3, name: 'Spicy Tuna Roll', description: 'Tuna mixed with spicy mayo, rolled with cucumber', price: 13.99 },
          { id: 4, name: 'Dragon Roll', description: 'Eel and cucumber topped with avocado', price: 12.99 },
          { id: 5, name: 'Yellowtail Sashimi', description: 'Fresh sliced yellowtail, served raw', price: 6.99 },
        ],
      },
      {
        id: 3,
        name: 'Burger Shack',
        menu: [
          { id: 1, name: 'Cheeseburger', description: 'Classic cheeseburger with fries', price: 10.99 },
          { id: 2, name: 'Veggie Burger', description: 'Delicious plant-based burger', price: 11.99 },
          { id: 3, name: 'Hamburger', description: 'Beef patty with lettuce, tomato, and pickles.', price: 7.99 },
          { id: 4, name: 'Bison Burger', description: 'Bison patty with aged cheddar, arugula, and mustard', price: 15.99 },
          { id: 5, name: 'Korean BBQ Burger', description: 'Beef patty, kimchi, gochujang sauce, and fried egg', price: 17.99 },
        ],
      },
      {
        id: 4,
        name: 'DLzengoff',
        menu: [
          { id: 1, name: 'Chicken Wings', description: 'Deep-fried or baked wings served with buffalo, BBQ, or other sauces', price: 11.99 },
          { id: 2, name: 'Lasagna', description: 'Layers of pasta, meat sauce, cheese, and béchamel sauce, baked together', price: 13.99 },
          { id: 3, name: 'Lobster Roll', description: 'Lobster meat served in a bun with mayonnaise and seasonings', price: 13.99 },
          { id: 4, name: 'Chicken Caesar Wrap', description: 'Grilled chicken, Romaine lettuce, Caesar dressing, and Parmesan cheese', price: 12.99 },
          { id: 5, name: 'Steamed Vegetables', description: 'A variety of fresh vegetables, usually steamed or sautéed in olive oil.', price: 18.99 },
        ],
      },
      {
        id: 5,
        name: 'Café Blanc',
        menu: [
          { id: 1, name: 'Espresso', description: 'A strong, concentrated coffee made from a small amount of water and finely ground coffee beans', price: 10.99 },
          { id: 2, name: 'Americano', description: 'Espresso diluted with hot water, giving it a similar strength to drip coffee', price: 13.99 },
          { id: 3, name: 'Cappuccino', description: 'Espresso with steamed milk and a thick layer of frothy milk foam on top', price: 13.99 },
          { id: 4, name: 'Mocha', description: 'A latte with chocolate syrup or cocoa powder added, often topped with whipped cream', price: 12.99 },
          { id: 5, name: 'Iced Coffee', description: 'Brewed coffee that is cooled and served over ice, often sweetened or with milk', price: 11.99 },
        ],
      },
      {
        id: 6,
        name: 'Wildwood Espresso',
        menu: [
          { id: 1, name: 'Espresso', description: 'A strong, concentrated coffee made from a small amount of water and finely ground coffee beans', price: 11.99 },
          { id: 2, name: 'Latte', description: 'Espresso with steamed milk, usually topped with a small amount of foam', price: 12.99 },
          { id: 3, name: 'Cappuccino', description: 'Espresso with steamed milk and a thick layer of frothy milk foam on top', price: 11.99 },
          { id: 4, name: 'Iced Mocha', description: 'A chilled version of mocha, combining iced espresso, chocolate syrup, milk, and ice', price: 11.99 },
          { id: 5, name: 'Iced Coffee', description: 'Brewed coffee that is cooled and served over ice, often sweetened or with milk', price: 12.99 },
        ],
      },
    ];

    // Find the restaurant by id and set the data
    const restaurantData = mockRestaurants.find((rest) => rest.id === parseInt(id));
    if (restaurantData) {
      setRestaurant(restaurantData);
      setMenuItems(restaurantData.menu);
    }
  }, [id]);

  return (
    <Container>
      {restaurant ? (
        <>
          <Typography variant="h4">{restaurant.name}</Typography>
          <Grid container spacing={3}>
            {menuItems.map((menuItem) => (
              <Grid item xs={12} sm={6} md={4} key={menuItem.id}>
                <MenuItemCard
                  id={menuItem.id}
                  name={menuItem.name}
                  description={menuItem.description}
                  price={menuItem.price}
                  addToCart={addToCart} // Pass the addToCart function to the MenuItemCard
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="h6">Restaurant not found</Typography>
      )}
    </Container>
  );
};

export default RestaurantDetails;
