import { StatusBar } from 'expo-status-bar';

import React, { useEffect } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import SearchButton from './SearchButton';
import NotificationButton from './NotificationButton';
import MoreButton from './MoreButton';
import FoodButton from './FoodButton';

export default function App() {
  // Xử lí hành động button
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  // Lấy kích thước màn hình
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View>
      <Image
        source={require('./assets/images/logo.png')}
        style={{ width: 248, height: 47, position: 'absolute', top: 45 }}
      />

       <SearchButton onPress={handleButtonPress} />
       <NotificationButton onPress={handleButtonPress} />
       <MoreButton onPress={handleButtonPress} />

       <FoodButton onPress={handleButtonPress} />

       <Image
         source={require('./assets/images/bottom_menu.png')}
         style={{ width: screenWidth, top: (screenHeight - 130)}}
       />
    </View>
  );
}
