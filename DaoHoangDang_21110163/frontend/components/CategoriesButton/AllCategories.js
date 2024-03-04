import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as style from '../../styles';

const AllCategories = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.selectedCategoryStyles.text}>All</Text>
    </TouchableOpacity>
  );
};

export default AllCategories;