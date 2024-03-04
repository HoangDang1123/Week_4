import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const BlouseCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.unSelectedCategoryStyles.text}>Blouse</Text>
    </TouchableOpacity>
  );
};

export default BlouseCategory;