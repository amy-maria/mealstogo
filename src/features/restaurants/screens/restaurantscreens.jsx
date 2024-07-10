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
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.sizes[2]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.bg.secondary};
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
