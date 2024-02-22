import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const NonFoodButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width: 120}}>
      <Text className="font-bold left-5 text-2xl border-b-4 ml-3">Non-Food</Text>
    </TouchableOpacity>
  );
};

export default NonFoodButton;