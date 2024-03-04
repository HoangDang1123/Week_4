import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const JeansCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.unSelectedCategoryStyles.text}>Jeans</Text>
    </TouchableOpacity>
  );
};

export default JeansCategory;