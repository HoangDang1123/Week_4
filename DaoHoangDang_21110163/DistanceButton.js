import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const DistanceButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="left-6 bg-[#38A59F] justify-center rounded-xl flex-wrap">
      <Image source={require('./assets/images/arrow-down.png')} className="ml-4 mr-1 w-3"/>
      <Text className="mr-4 font-bold text-lg text-gray-100">Km</Text>
    </TouchableOpacity>
  );
};

export default DistanceButton;