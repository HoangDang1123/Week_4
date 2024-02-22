import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const FilterButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="left-5 bg-gray-400 justify-center rounded-xl">
      <Image source={require('./assets/images/sliders.png')} className="m-3 w-7"/>
    </TouchableOpacity>
  );
};

export default FilterButton;