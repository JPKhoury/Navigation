import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';
import Contactscreen from './screens/ContactScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const NavTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  );
}

const Menu = () => {
  return (
    <NavTab.Navigator>
      <NavTab.Screen name="Home" component={Homescreen}/>
      <NavTab.Screen name="About" component={Aboutscreen}/>
      <NavTab.Screen name="Contact" component={Contactscreen}/>
    </NavTab.Navigator>
  );
}
