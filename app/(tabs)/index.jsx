import React from 'react';
import { RestaurantsScreen } from '@features/restaurants/screens/restaurantscreens.jsx';
import { ThemeProvider } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
