import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const FreeButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="left-7 bg-[#38A59F] justify-center rounded-xl">
      <Text className="ml-4 mr-4 font-bold text-lg text-gray-100">Free</Text>
    </TouchableOpacity>
  );
};

export default FreeButton;