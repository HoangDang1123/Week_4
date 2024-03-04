import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const PantsCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.unSelectedCategoryStyles.text}>Pants</Text>
    </TouchableOpacity>
  );
};

export default PantsCategory;