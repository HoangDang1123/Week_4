import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const DressCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.unSelectedCategoryStyles.text}>Dress</Text>
    </TouchableOpacity>
  );
};

export default DressCategory;