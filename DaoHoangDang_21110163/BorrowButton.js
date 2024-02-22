import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const FreeButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="left-8 bg-gray-400 justify-center rounded-xl">
      <Text className="ml-4 mr-4 font-bold text-lg text-gray-200">Borrow</Text>
    </TouchableOpacity>
  );
};

export default FreeButton;