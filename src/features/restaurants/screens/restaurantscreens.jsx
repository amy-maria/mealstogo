import React from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'react-native';
import { RestaurantInfoCard } from '@features/restaurants/components/restaurant-info.card.jsx';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background-color: white;
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background-color: green;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar placeholder='Search' value='Search' />
        </SearchContainer>

        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};
