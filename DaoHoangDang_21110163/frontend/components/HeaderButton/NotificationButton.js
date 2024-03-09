import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const NotificationButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image source={require('../../assets/images/notification.png')}/>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  marginTop: 20,
  marginHorizontal: 5
})

export default NotificationButton;