import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image source={require('../../assets/images/search.png')}/>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  marginTop: 22,
  marginHorizontal: 5
})

export default SearchButton;