import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const TshirtCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.unSelectedCategoryStyles.text}>T-shirt</Text>
    </TouchableOpacity>
  );
};

export default TshirtCategory;