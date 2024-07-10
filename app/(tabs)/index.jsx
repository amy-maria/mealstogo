import React from 'react';
import { RestaurantsScreen } from '@features/restaurants/screens/restaurantscreens.jsx';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../src/infrastructure/theme';
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
