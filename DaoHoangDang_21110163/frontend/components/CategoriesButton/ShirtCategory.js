import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const ShirtCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={style.unSelectedCategoryStyles.text}>Shirt</Text>
    </TouchableOpacity>
  );
};

export default ShirtCategory;