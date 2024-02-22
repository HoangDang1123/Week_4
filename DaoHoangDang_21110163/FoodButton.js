import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const FoodButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text className="font-bold text-{40}">Food</Text>
    </TouchableOpacity>
  );
};

export default FoodButton;