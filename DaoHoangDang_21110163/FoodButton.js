import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const FoodButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width: 55}}>
      <Text className="font-bold left-5 text-2xl border-b-4 text-gray-400 border-gray-400">Food</Text>
    </TouchableOpacity>
  );
};

export default FoodButton;