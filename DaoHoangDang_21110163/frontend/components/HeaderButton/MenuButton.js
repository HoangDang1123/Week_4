import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const MenuButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image source={require('../../assets/images/more.png')}/>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  marginTop: 25,
  marginHorizontal: 5
})

export default MenuButton;