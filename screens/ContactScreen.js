import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.contact}>
      <Text style={{ fontSize: 30 }}>Contact Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  contact:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#B7C7C7'
  }
})

export default ContactScreen;
