import { StatusBar } from 'expo-status-bar';

import React, { useEffect } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import SearchButton from './SearchButton';
import NotificationButton from './NotificationButton';
import MoreButton from './MoreButton';
import FoodButton from './FoodButton';
import NonFoodButton from './NonFoodButton';
import FilterButton from './FilterButton';
import DistanceButton from './DistanceButton';
import FreeButton from './FreeButton';
import BorrowButton from './BorrowButton';
import RentButton from './RentButton';

export default function App() {
  // Xử lí hành động button
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  // Lấy kích thước màn hình
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('./assets/images/logo.png')}
          style={{ width: 248, height: 47, position: 'absolute', top: 50 }}
        />

        <SearchButton onPress={handleButtonPress} />
        <NotificationButton onPress={handleButtonPress} />
        <MoreButton onPress={handleButtonPress} />
      </View>

      <View style={{ marginTop: 120, justify: 'center', flexDirection: 'row'}}>
        <FoodButton onPress={handleButtonPress} />
        <NonFoodButton onPress={handleButtonPress} />
      </View>

      <View style={{ height: 30, marginTop: 20, justify: 'center', flexDirection: 'row'}}>
        <FilterButton onPress={handleButtonPress} />
        <DistanceButton onPress={handleButtonPress} />
        <FreeButton onPress={handleButtonPress} />
        <BorrowButton onPress={handleButtonPress} />
        <RentButton onPress={handleButtonPress} />
      </View>

      <View style={{position: 'absolute', bottom: -15}}>
        <Image
          source={require('./assets/images/bottom_menu.png')}
          style={{ width: screenWidth}}
        />
      </View>
    </View>
  );
}
